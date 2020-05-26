const User = require('../models/User');
const db = require('../middleware/db');
const passport = require('passport');
const {
  handleError,
  buildErrorObject,
  isIDValid,
  entryAlreadyExists,
  buildSuccessObject
} = require('../middleware/utils');

/**
 * Create a user in the database.
 * @description This method is shared between POST /users & POST /register
 * @param {Object} req request object
 * @param {Boolean} isAdmin used to determine if role field can be set or not.
 */
const create = async (req, isAdmin) => {
  return new Promise((resolve, reject) => {
    const user = new User({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      organisation: req.body.organisation,
      ...(isAdmin && { role: req.body.role }) // Only Admin can set role, others fall back to default role
    });
    user.save((error, item) => {
      if (error) return reject(buildErrorObject(422, error.message));
      const removeProperties = ({ password, ...rest }) => rest;
      resolve(removeProperties(item.toJSON()));
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

exports.deserialiseById = async (userId) => {
  try {
    const id = await isIDValid(userId);
    return await db.getEntry(id, User);
  } catch (error) {
    return null;
  }
};

exports.getUserByEmail = async (req, res) => {
  try {
    res.status(200).json(await db.getUserByEmail(req.params.emails));
  } catch (error) {
    handleError(res, error);
  }
};

exports.getProfile = async (req, res) => {
  if (req.isAuthenticated()) {
    try {
      const id = await isIDValid(req.user.id);
      res.status(200).json(await db.getEntry(id, User));
    } catch (error) {
      handleError(res, error);
    }
  } else {
    res.status(401).send({ error: 'Not Authenticated' });
  }
};

exports.login = async (req, res, next) => {
  try {
    passport.authenticate('local', (err, user, info) => {
      if (info) return res.status(401).send(info);
      if (err) return res.status(500).send({ error: err });
      if (!user) {
        return res.send({
          error: 'You have entered an invalid email or password.'
        });
      }

      req.login(user, (err) => {
        if (err) return next(err);
        return res.send(user);
      });
    })(req, res, next);
  } catch (error) {
    handleError(res, error);
  }
};

exports.logout = async (req, res, next) => {
  if (req.session) {
    req.logOut();
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.send(buildSuccessObject('Successfully logged out.'));
      }
    });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const doesEmailExists = await emailExists(req.body.email);
    if (!doesEmailExists) {
      const isAdmin = req.isAuthenticated() && req.user.role === 'ADMIN';
      const item = await create(req, isAdmin);

      // Log in if they registered, not if admin created account
      if (!req.isAuthenticated()) {
        req.login(item, (err) => {
          if (err) return next(err);
        });
      }

      // TODO: Send Registration Email
      res.status(201).json(item);
    }
  } catch (error) {
    handleError(res, error);
  }
};

exports.getUserStats = async () => {
  try {
    const stats = await User.aggregate([
      {
        $facet: {
          totalUsers: [
            { $match: { _id: { $exists: true } } },
            { $count: 'totalUsers' }
          ],
          totalEnabled: [
            { $match: { enabled: true } },
            { $count: 'totalEnabled' }
          ],
          totalStandard: [
            { $match: { role: 'STANDARD' } },
            { $count: 'totalStandard' }
          ],
          totalModerator: [
            { $match: { role: 'MODERATOR' } },
            { $count: 'totalModerator' }
          ],
          totalAnalyst: [
            { $match: { role: 'ANALYST' } },
            { $count: 'totalAnalyst' }
          ],
          totalAdmin: [{ $match: { role: 'ADMIN' } }, { $count: 'totalAdmin' }],
          totalNewInLast24: [
            {
              $match: {
                createdAt: { $gt: new Date(Date.now() - 24 * 60 * 60 * 1000) }
              }
            },
            { $count: 'totalNewInLast24' }
          ]
        }
      },
      {
        $project: {
          total: {
            $ifNull: [{ $arrayElemAt: ['$totalUsers.totalUsers', 0] }, 0]
          },
          enabled: {
            $ifNull: [{ $arrayElemAt: ['$totalEnabled.totalEnabled', 0] }, 0]
          },
          standard: {
            $ifNull: [{ $arrayElemAt: ['$totalStandard.totalStandard', 0] }, 0]
          },
          moderator: {
            $ifNull: [
              { $arrayElemAt: ['$totalModerator.totalModerator', 0] },
              0
            ]
          },
          analyst: {
            $ifNull: [{ $arrayElemAt: ['$totalAnalyst.totalAnalyst', 0] }, 0]
          },
          admin: {
            $ifNull: [{ $arrayElemAt: ['$totalAdmin.totalAdmin', 0] }, 0]
          },
          newInLast24: {
            $ifNull: [
              { $arrayElemAt: ['$totalNewInLast24.totalNewInLast24', 0] },
              0
            ]
          }
        }
      }
    ]);

    return stats[0];
  } catch (error) {
    console.log(error);
    return {};
  }
};
