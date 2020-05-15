const { Schema } = require('mongoose');
const AuthorSchema = require('./Name');

/**
 * The schema for a Book Section
 */
const BookSectionSchema = new Schema({
  authors: {
    type: [AuthorSchema],
    required: [true, 'An author is required.']
  },
  title: {
    type: String,
    required: [true, 'A title is required.']
  },
  book_authors: {
    type: [AuthorSchema],
    required: [true, 'A book author is required.']
  },
  book_title: {
    type: String,
    required: [true, 'A book title is required.']
  },
  city: {
    type: String,
    required: [true, 'A city is required.']
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  publisher: {
    type: String,
    required: [true, 'A publisher is required.']
  },
  year: {
    type: Number,
    required: [true, 'A year is required.']
  },
  volume: {
    type: Number
  },
  number_of_volumes: {
    type: Number
  },
  pages: {
    type: String,
    required: [true, 'Page numbers are required.']
  },
  editor: {
    type: [AuthorSchema]
  },
  translator: {
    type: [AuthorSchema]
  },
  short_title: {
    type: String
  },
  standard_number: {
    type: Number
  },
  edition: {
    type: String
  },
  comments: {
    type: String
  }
});

module.exports = BookSectionSchema;
