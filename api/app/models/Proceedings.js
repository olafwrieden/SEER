const { Schema } = require('mongoose');
const AuthorSchema = require('./Name');
const EvidenceSchema = require('./Evidence');

/**
 * The schema for a Conference Proceeding
 */
const Proceedings = EvidenceSchema.discriminator(
  'Proceedings',
  new Schema({
    authors: {
      type: [AuthorSchema],
      required: [true, 'An author is required.']
    },
    title: {
      type: String,
      required: [true, 'A title is required.']
    },
    conference: {
      type: String,
      required: [true, 'The conference publication name is required.']
    },
    publisher: {
      type: String,
      required: [true, 'A publisher is required.']
    },
    city: {
      type: String,
      required: [true, 'A city is required.']
    },
    volume: {
      type: Number
    },
    year: {
      type: Number,
      required: [true, 'A year is required.']
    },
    pages: {
      type: String,
      required: [true, 'Page numbers are required.']
    },
    editor: {
      type: [AuthorSchema]
    },
    short_title: {
      type: String
    },
    standard_number: {
      type: Number
    },
    comments: {
      type: String
    }
  })
);

module.exports = Proceedings;
