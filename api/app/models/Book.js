const { Schema } = require('mongoose');
const AuthorSchema = require('./Name');
const EvidenceSchema = require('./Evidence');

/**
 * The schema for a Book
 */
const BookSchema = EvidenceSchema.discriminator(
  'BOOK',
  new Schema({
    authors: {
      type: [AuthorSchema],
      required: [true, 'An author is required.']
    },
    title: {
      type: String,
      required: [true, 'A title is required.']
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
  })
);

module.exports = BookSchema;
