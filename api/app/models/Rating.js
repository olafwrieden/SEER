const { Schema, Types } = require('mongoose');

/**
 * The schema for a Rating
 */
const RatingSchema = new Schema(
  {
    stars: {
      type: Number,
      required: [true, 'A rating (0-5 inclusive) is required.']
    },
    comment: {
      type: String,
      minlength: 20
    },
    author: {
      type: Types.ObjectId,
      ref: 'User',
      required: [true, 'The author is required.']
    },
    is_public: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = RatingSchema;
