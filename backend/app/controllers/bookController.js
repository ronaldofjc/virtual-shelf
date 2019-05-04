const mongoose = require('mongoose');

const Book = mongoose.model('Book');

module.exports = {
  async books(req, res, next) {
    try {
      const books = await Book.find({
        user: req.userId,
      });

      return res.json(books);
    } catch (err) {
      return next(err);
    }
  },

  async book(req, res, next) {
    try {
      const book = await Book.findById(req.params.id);

      return res.json(book);
    } catch (err) {
      return next(err);
    }
  },

  async create(req, res, next) {
    try {
      const book = await Book.create({ ...req.body, user: req.userId });

      return res.json(book);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      await Book.findByIdAndRemove(req.params.id);

      return res.json('Book removed!');
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

      return res.json(book);
    } catch (err) {
      return next(err);
    }
  },

  async countBooks(req, res, next) {
    try {
      const books = await Book.count({
        user: req.userId,
      });

      return res.json(books);
    } catch (err) {
      return next(err);
    }
  },

  async topBookWriters(req, res, next) {
    try {
      const id = req.userId;

      const writers = await Book.aggregate([
        { $group: { _id: { user: '$user', writer: '$writer' }, total: { $sum: 1 } } },
        { $sort: { total: -1 } },
      ]);

      const result = writers.filter(elem => elem._id.user == id);

      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};
