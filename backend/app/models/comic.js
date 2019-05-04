const mongoose = require('mongoose');

const ComicSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
  },
  serie: {
    type: String,
  },
  publishingCompany: {
    type: String,
    required: true,
  },
  edition: {
    type: Number,
  },
  pages: {
    type: Number,
  },
  evaluation: {
    type: Number,
  },
  cover: {
    type: String,
  },
  type: {
    type: String,
  },
  read: {
    type: String,
  },
  writer: {
    type: String,
  },
  artist: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Comic', ComicSchema);
