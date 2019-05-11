const mongoose = require('mongoose');

const Comic = mongoose.model('Comic');
const Book = mongoose.model('Book');
const Manga = mongoose.model('Manga');

module.exports = {
  async stats(req, res, next) {
    try {
      const stats = {
        comics: 0,
        books: 0,
        mangas: 0,
      };
      const comics = await Comic.countDocuments({
        user: req.userId,
      });

      const mangas = await Manga.countDocuments({
        user: req.userId,
      });

      const books = await Book.countDocuments({
        user: req.userId,
      });

      stats.comics = comics;
      stats.mangas = mangas;
      stats.books = books;
      return res.json(stats);
    } catch (err) {
      return next(err);
    }
  },
};
