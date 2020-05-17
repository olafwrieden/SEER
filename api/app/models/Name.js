const { Schema } = require('mongoose');

/**
 * The schema for an Author / Translator / Editor / Producer
 */
const NameSchema = new Schema(
  {
    first_name: {
      type: String,
      match: [/^[a-zA-Z]+$/, 'First Name is invalid.'],
      required: [true, 'First Name is required.']
    },
    middle_name: {
      type: String,
      match: [/^[a-zA-Z]+$/, 'Middle Name is invalid.']
    },
    last_name: {
      type: String,
      match: [/^[a-zA-Z]+$/, 'Last Name is invalid.'],
      required: [true, 'Last Name is required.']
    }
  },
  { _id: false }
);

module.exports = NameSchema;
