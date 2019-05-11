const express = require('express');
const requireDir = require('require-dir');

const routes = express.Router();

const authMiddleware = require('./middlewares/auth');

const controllers = requireDir('./controllers');

routes.post('/signup', controllers.authController.signup);
routes.post('/signin', controllers.authController.signin);

// Auth routes
routes.use(authMiddleware);

routes.put('/users', controllers.userController.update);

// Stats
routes.get('/stats', controllers.statController.stats);

// Books routes
routes.get('/books', controllers.bookController.books);
routes.get('/books/:id', controllers.bookController.book);
routes.post('/books', controllers.bookController.create);
routes.put('/books/:id', controllers.bookController.update);
routes.delete('/books/:id', controllers.bookController.destroy);
routes.get('/countBooks', controllers.bookController.countBooks);
routes.get('/topBookWriters', controllers.bookController.topBookWriters);

// Comics routes
routes.get('/comics', controllers.comicController.comics);
routes.get('/comics/:id', controllers.comicController.comic);
routes.post('/comics', controllers.comicController.create);
routes.put('/comics/:id', controllers.comicController.update);
routes.delete('/comics/:id', controllers.comicController.destroy);
routes.get('/countComics', controllers.comicController.countComics);
routes.get('/topComicWriters', controllers.comicController.topComicWriters);
routes.get('/topComicArtists', controllers.comicController.topComicArtists);

// Mangas routes
routes.get('/mangas', controllers.mangaController.mangas);
routes.get('/mangas/:id', controllers.mangaController.manga);
routes.post('/mangas', controllers.mangaController.create);
routes.put('/mangas/:id', controllers.mangaController.update);
routes.delete('/mangas/:id', controllers.mangaController.destroy);
routes.get('/countMangas', controllers.mangaController.countMangas);
routes.get('/topMAngaWriters', controllers.mangaController.topMangaWriters);
routes.get('/topMangaArtists', controllers.mangaController.topMangaArtists);

module.exports = routes;
