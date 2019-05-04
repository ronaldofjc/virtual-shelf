const mongoose = require('mongoose');

const Manga = mongoose.model('Manga');

module.exports = {
  async mangas(req, res, next) {
    try {
      const mangas = await Manga.find({
        user: req.userId,
      });

      return res.json(mangas);
    } catch (err) {
      return next(err);
    }
  },

  async manga(req, res, next) {
    try {
      const manga = await Manga.findById(req.params.id);

      return res.json(manga);
    } catch (err) {
      return next(err);
    }
  },

  async create(req, res, next) {
    try {
      const manga = await Manga.create({ ...req.body, user: req.userId });

      return res.json(manga);
    } catch (err) {
      return next(err);
    }
  },

  async destroy(req, res, next) {
    try {
      await Manga.findByIdAndRemove(req.params.id);

      return res.json('Manga removed!');
    } catch (err) {
      return next(err);
    }
  },

  async update(req, res, next) {
    try {
      const manga = await Manga.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true });

      return res.json(manga);
    } catch (err) {
      return next(err);
    }
  },

  async countMangas(req, res, next) {
    try {
      const mangas = await Manga.count({
        user: req.userId,
      });

      return res.json(mangas);
    } catch (err) {
      return next(err);
    }
  },

  async topMangaWriters(req, res, next) {
    try {
      const id = req.userId;

      const writers = await Manga.aggregate([
        { $group: { _id: { user: '$user', writer: '$writer' }, total: { $sum: 1 } } },
        { $sort: { total: -1 } },
      ]);

      const result = writers.filter(elem => elem._id.user == id);

      return res.json(result);
    } catch (err) {
      return next(err);
    }
  },

  async topMangaArtists(req, res, next) {
    try {
      const id = req.userId;

      const artists = await Manga.aggregate([
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
