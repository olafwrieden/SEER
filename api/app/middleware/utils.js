const { Types } = require('mongoose');
const { NODE_ENV } = process.env;

/* Common error handler */
exports.handleError = (res, error) => {
  if (NODE_ENV === 'development') {
    console.info(error);
  }
  // Send error
  res.status(error.code).json({
    errors: {
      message: error.message
    }
  });
};

/* Format of error responses */
exports.buildErrorObject = (code, message) => ({ code, message });

/* Format of success responses */
exports.buildSuccessObject = (message) => ({ message });

/* Builds error object if the entry already exists */
exports.entryAlreadyExists = (error, entry, reject, message) => {
  if (error) reject(this.buildErrorObject(422, error.message));
  if (entry) reject(this.buildErrorObject(422, message));
};

/* Builds error object if the entry is not found */
exports.entryNotFound = (error, entry, reject, message) => {
  if (error) reject(this.buildErrorObject(422, error.message));
  if (!entry) reject(this.buildErrorObject(404, message));
};

/* Checks if a given ID is valid for Mongoose */
exports.isIDValid = async (id) => {
  return new Promise((resolve, reject) => {
    const goodID = Types.ObjectId.isValid(id);
    return goodID
      ? resolve(id)
      : reject(this.buildErrorObject(422, 'ID_MALFORMED'));
  });
};
