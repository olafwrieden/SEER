const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const RatingSchema = require('./Rating');
const StatusSchema = require('./Status');

/* Base Options for Evidence Discrimination */
const baseOptions = {
  discriminatorKey: '__type',
  collection: 'evidence',
  timestamps: true
};

/**
 * The Base Evidence Schema
 */
const EvidenceSchema = new Schema(
  {
    keywords: {
      type: [String],
      required: [true, 'A few keywords are required.']
    },
    se_method: {
      type: [String],
      required: [true, 'At least one SE method is required.']
    },
    research_question: {
      type: String
    },
    outcome: {
      type: String
    },
    doi: {
      type: String
    },
    ratings: {
      type: [RatingSchema]
    },
    status: {
      type: StatusSchema,
      required: true,
      default: () => ({})
    }
  },
  baseOptions
);

EvidenceSchema.plugin(mongoosePaginate);
module.exports = model('Evidence', EvidenceSchema);
