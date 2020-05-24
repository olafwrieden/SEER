const {
  buildErrorObject,
  buildSuccessObject,
  entryNotFound
} = require('./utils');
const User = require('../models/User');

/* Build sort order for the query */
const buildSort = (sort, order) => {
  const sortBy = {};
  sortBy[sort] = order;
  return sortBy;
};

/* Remove `_id`, `__v`, `updatedAt` from results */
const cleanPaginationID = (result) => {
  result.data.map((element) => {
    delete element._id;
    delete element.__v;
    delete element.updatedAt;
  });
  return result;
};

/* Set pagination options */
const listInitOptions = async (req) => {
  return new Promise((resolve) => {
    const order = req.query.order || 1;
    const sort = req.query.sort || 'createdAt';
    const sortBy = buildSort(sort, order);
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 5;
    const options = {
      sort: sortBy,
      lean: true,
      page,
      limit,
      customLabels: { docs: 'data', totalDocs: 'totalItems' }
    };
    resolve(options);
  });
};

/* Builds query string */
exports.checkQueryString = (query) => {
  return new Promise((resolve, reject) => {
    try {
      if (
        typeof query.filter !== 'undefined' &&
        typeof query.fields !== 'undefined'
      ) {
        const data = { $or: [] };
        const array = [];
        // Takes fields param and builds an array by splitting with ','
        const arrayFields = query.fields.split(',');
        // Adds SQL Like %word% with regex
        arrayFields.map((entry) => {
          array.push({
            [entry]: {
              $regex: new RegExp(query.filter, 'i')
            }
          });
        });
        // Puts array result in data
        data.$or = array;
        resolve(data);
      } else {
        resolve({});
      }
    } catch (error) {
      console.error(error.message);
      reject(buildErrorObject(422, 'ERROR_WITH_FILTER'));
    }
  });
};

/* Fetches all entries (with pagination) */
exports.getEntries = async (req, model, query) => {
  const options = await listInitOptions(req);
  return new Promise((resolve, reject) => {
    model.paginate(query, options, (error, entries) => {
      if (error) {
        reject(buildErrorObject(422, error.message));
      }
      resolve(cleanPaginationID(entries));
    });
  });
};

/* Fetches an entry by ID */
exports.getEntry = async (id, model) => {
  return new Promise((resolve, reject) => {
    model.findById(id, (error, entry) => {
      entryNotFound(error, entry, reject, 'NOT_FOUND');
      resolve(entry);
    });
  });
};

/* Fetches a user by Email */
exports.getUserByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    User.find({ email }, (error, entry) => {
      entryNotFound(error, entry, reject, 'NOT_FOUND');
      resolve(entry);
    });
  });
};

/* Creates a new item in the database */
exports.createEntry = async (req, model) => {
  return new Promise((resolve, reject) => {
    model.create(req, (error, entry) => {
      if (error) {
        reject(buildErrorObject(422, error.message));
      }
      resolve(entry);
    });
  });
};

/* Updates an entry in the database */
exports.updateEntry = async (id, model, req) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndUpdate(
      id,
      req,
      {
        new: true,
        runValidators: true
      },
      (error, entry) => {
        entryNotFound(error, entry, reject, 'NOT_FOUND');
        resolve(entry);
      }
    );
  });
};

/* Deletes an entry from the database */
exports.deleteEntry = async (id, model) => {
  return new Promise((resolve, reject) => {
    model.findByIdAndRemove(id, (error, entry) => {
      entryNotFound(error, entry, reject, 'NOT_FOUND');
      resolve(buildSuccessObject('DELETED'));
    });
  });
};
