const { Schema } = require('mongoose');
const AuthorSchema = require('./Name');
const EvidenceSchema = require('./Evidence');

/**
 * The schema for a Website
 */
const Website = EvidenceSchema.discriminator(
  'Website',
  new Schema({
    authors: {
      type: [AuthorSchema],
      required: [true, 'An author is required.']
    },
    page_name: {
      type: String,
      required: [true, 'The page name is required.']
    },
    site_name: {
      type: String,
      required: [true, 'The site name is required.']
    },
    url: {
      type: String,
      equired: [true, 'A URL is required.']
    },
    producer_name: {
      type: [AuthorSchema]
    },
    production_company: {
      type: String
    },
    year: {
      type: Number,
      required: [true, 'A year is required.']
    },
    month: {
      type: String,
      required: [true, 'A month is required.']
    },
    day: {
      type: Number,
      required: [true, 'A day is required.']
    },
    editor: {
      type: [AuthorSchema]
    },
    short_title: {
      type: String
    },
    version: {
      type: Number
    },
    standard_number: {
      type: Number
    },
    comments: {
      type: String
    }
  })
);

module.exports = Website;
