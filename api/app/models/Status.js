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
        'PENDING_APPROVAL', // Eidence is submitted (to be moderated)
        'PENDING_ANALYSIS', // Evidence is approved (to be analysed)
        'AVAILABLE', // Evidence is publicly available
        'UNAVAILABLE' // Evidence is publicly unavailable
      ],
      default: 'PENDING_APPROVAL',
      required: [true, 'A status is required.']
    },
    rejection_reason: {
      type: String,
      minlength: 20
    }
  },
  { _id: false }
);

module.exports = StatusSchema;
