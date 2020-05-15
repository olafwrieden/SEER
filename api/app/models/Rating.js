const { Schema } = require('mongoose');

/**
 * The schema for a Rating
 */
const RatingSchema = new Schema(
  {
    rating: {
      type: Number,
      required: [true, 'A rating (0-5 inclusive) is required.']
    },
    comment: {
      type: String,
      minlength: 20
    },
    author: {
      type: String
    },
    is_public: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

module.exports = RatingSchema;
