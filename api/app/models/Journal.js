const { Schema } = require('mongoose');
const AuthorSchema = require('./Name');
const EvidenceSchema = require('./Evidence');

/**
 * The schema for a Journal
 */
const JournalSchema = EvidenceSchema.discriminator(
  'JOURNAL',
  new Schema({
    authors: {
      type: [AuthorSchema],
      required: [true, 'An author is required.']
    },
    title: {
      type: String,
      required: [true, 'A title is required.']
    },
    journal: {
      type: String,
      required: [true, 'A journal name is required.']
    },
    publisher: {
      type: String
    },
    city: {
      type: String
    },
    year: {
      type: Number,
      required: [true, 'A year is required.']
    },
    month: {
      type: String
    },
    day: {
      type: Number
    },
    volume: {
      type: Number
    },
    issue: {
      type: Number
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

module.exports = JournalSchema;
