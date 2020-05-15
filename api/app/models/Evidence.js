const { Schema, model } = require('mongoose');
const AuthorSchema = require('./Name');
const RatingSchema = require('./Rating');
const BookSchema = require('./Book');
const BookSectionSchema = require('./BookSection');
const JournalSchema = require('./Journal');
const PeriodicalSchema = require('./Periodical');
const ProceedingsSchema = require('./Proceedings');
const WebsiteSchema = require('./Website');

const StatusSchema = new Schema({
  status: {
    type: String,
    enum: [
      'REJECTED', // Evidence is rejected
      'PENDING_APPROVAL', // Eidence is submitted (to be moderated)
      'PENDING_ANALYSIS', // Evidence is approved (to be analysed)
      'AVAILABLE', // Evidence is publicly available
      'UNAVAILABLE' // Evidence is publicly unavailable
    ],
    default: 'PENDING_APPROVAL'
  },
  rejection_reason: {
    type: String,
    minlength: 20
  }
});

const EvidenceSchema = new Schema(
  {
    entry: {
      type: [
        BookSchema |
          AuthorSchema |
          BookSectionSchema |
          JournalSchema |
          PeriodicalSchema |
          ProceedingsSchema |
          WebsiteSchema
      ],
      required: [true, 'An entry is required.']
    },
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
    ratings: {
      type: [RatingSchema]
    },
    status: {
      type: StatusSchema
    }
  },
  { timestamps: true }
);

module.exports = model('Evidence', EvidenceSchema);
