const User = require('../models/User');
const db = require('../middleware/db');
const {
  handleError,
  buildErrorObject,
  isIDValid,
  entryAlreadyExists
} = require('../middleware/utils');

const create = async (req) => {
  return new Promise((resolve, reject) => {
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    });
    user.save((error, item) => {
      if (error) return reject(buildErrorObject(422, error.message));
      const removeProperties = ({ password, ...rest }) => rest;
      resolve(removeProperties(item.toObject()));
    });
  });
};

const emailExists = async (email) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email }, (error, item) => {
      entryAlreadyExists(error, item, reject, 'EMAIL_ALREADY_EXISTS');
      resolve(false);
    });
  });
};

const collectStats = async () => {
  /* Query DB for stats */
  const totalUsers = await User.countDocuments();
  const totalEnabled = await User.countDocuments({ enabled: 1 });
  const totalStandard = await User.countDocuments({ role: 'STANDARD' });
  const totalModerator = await User.countDocuments({ role: 'MODERATOR' });
  const totalAnalyst = await User.countDocuments({ role: 'ANALYST' });
  const totalAdmin = await User.countDocuments({ role: 'ADMIN' });
  const newInLast24 = await User.countDocuments({
    createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) }
  });

  /* Format and return stats */
  return {
    totalUsers,
    totalEnabled,
    totalStandard,
    totalModerator,
    totalAnalyst,
    totalAdmin,
    newInLast24
  };
};

exports.getUsers = async (req, res) => {
  try {
    const query = await db.checkQueryString(req.query);
    res.status(200).json(await db.getEntries(req, User, query));
  } catch (error) {
    handleError(res, error);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = await isIDValid(req.params.id);
    res.status(200).json(await db.getEntry(id, User));
  } catch (error) {
    handleError(res, error);
  }
};

exports.createUser = async (req, res) => {
  try {
    const doesEmailExists = await emailExists(req.body.email);
    if (!doesEmailExists) {
      const item = await create(req);
      // TODO: Send Registration Email
      res.status(201).json(item);
    }
  } catch (error) {
    handleError(res, error);
  }
};

exports.getStats = async (req, res) => {
  try {
    const userStats = await collectStats();
    res.status(200).json({ users: userStats });
  } catch (error) {
    handleError(res, error);
  }
};
