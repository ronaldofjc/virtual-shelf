const mongoose = require('mongoose');

const StatSchema = new mongoose.Schema({
  books: Number,
  comics: Number,
  mangas: Number,
});

mongoose.model('Stat', StatSchema);
