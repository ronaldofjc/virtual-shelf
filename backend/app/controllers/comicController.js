const mongoose = require('mongoose');

const Comic = mongoose.model('Comic');

module.exports = {
  async comics(req, res, next) {
    try {
      const comics = await Comic.find({
        user: req.userId,
      });

      return res.json(comics);
    } catch (err) {
      return next(err);
    }
  },

  async comic(req, res, next) {
    try {
      const comic = await Comic.findById(req.params.id);

      return res.json(comic);
    } catch (err) {
      return next(err);
    }
  },

  async create(req, res, next) {
    try {
      const comic = await Comic.create({ ...req.body, user: req.userId });

      return res.json(comic);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      await Comic.findByIdAndRemove(req.params.id);

      return res.json('Comic removed!');
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const comic = await Comic.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

      return res.json(comic);
    } catch (err) {
      return next(err);
    }
  },

  async countComics(req, res, next) {
    try {
      const comics = await Comic.count({
        user: req.userId,
      });

      return res.json(comics);
    } catch (err) {
      return next(err);
    }
  },

  async topComicWriters(req, res, next) {
    try {
      const id = req.userId;

      const writers = await Comic.aggregate([
        { $group: { _id: { user: '$user', writer: '$writer' }, total: { $sum: 1 } } },
        { $sort: { total: -1 } },
      ]);

      const result = writers.filter(elem => elem._id.user == id);

      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async topComicArtists(req, res, next) {
    try {
      const id = req.userId;

      const artists = await Comic.aggregate([
        { $group: { _id: { user: '$user', artist: '$artist' }, total: { $sum: 1 } } },
        { $sort: { total: -1 } },
      ]);

      const result = artists.filter(elem => elem._id.user == id);

      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },
};
