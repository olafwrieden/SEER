const { Schema } = require('mongoose');

/**
 * The schema for a Status
 */
const StatusSchema = new Schema(
  {
    state: {
      type: String,
      enum: [
        'REJECTED', // Evidence is rejected
        'PENDING_APPROVAL', // Evidence is submitted (to be moderated)
        'PENDING_ANALYSIS', // Evidence is approved (to be analysed)
        'AVAILABLE', // Evidence is publicly available
        'UNAVAILABLE' // Evidence is publicly unavailable
      ],
      default: 'PENDING_APPROVAL',
      required: [true, 'A status is required.']
    },
    rejection_reason: {
      type: String,
      enum: ['UNRELATED', 'POOR_QUALITY', 'DUPLICATE', 'OTHER']
    },
    rejection_comment: {
      type: String,
      minlength: 20,
      required: this.rejection_reason === 'OTHER'
    }
  },
  { _id: false }
);

module.exports = StatusSchema;
