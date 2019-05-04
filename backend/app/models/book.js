const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
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
  publishingCompany: {
    type: String,
    required: true,
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
  read: {
    type: String,
  },
  writer: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

mongoose.model('Book', BookSchema);
