const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const bcrypt = require('bcryptjs');

/**
 * The schema for a User
 */
const UserSchema = new Schema(
  {
    first_name: {
      type: String,
      match: [/^[a-zA-Z]+$/, 'First Name is invalid.'],
      required: [true, 'First Name is required.']
    },
    last_name: {
      type: String,
      match: [/^[a-zA-Z]+$/, 'Last Name is invalid.'],
      required: [true, 'Last Name is required.']
    },
    email: {
      type: String,
      index: { unique: true },
      match: [/\S+@\S+\.\S+/, 'Email is invalid.'],
      lowercase: true,
      required: [true, 'Email is required.']
    },
    password: {
      type: String,
      select: false,
      required: [true, 'Password is required.']
    },
    organisation: {
      type: String,
      default: ''
    },
    role: {
      type: String,
      enum: ['STANDARD', 'MODERATOR', 'ANALYST', 'ADMIN'],
      default: 'STANDARD'
    },
    avatar: {
      type: String
    },
    prefersDarkMode: {
      type: Boolean,
      default: false
    },
    enabled: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

/* Hash Password */
UserSchema.pre('save', function (next) {
  const user = this;

  // Create Avatar
  if (!user.avatar || user.avatar.trim() === '') {
    user.avatar = `https://ui-avatars.com/api/?background=cccccc&color=fff&name=${user.first_name}+${user.last_name}`;
  }

  // Only hash password if it was modified (or is new)
  if (!user.isModified('password')) return next();
  // Generate Salt
  bcrypt.genSalt(8, function (err, salt) {
    if (err) return next(err);
    // Hash password
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // Replace raw password with hash
      user.password = hash;
      next();
    });
  });
});

/* Password Comparison */
UserSchema.methods.comparePassword = function (inputPassword, cb) {
  bcrypt.compare(inputPassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// Failed Login Reasons
var reasons = (UserSchema.statics.failedLogin = {
  NOT_FOUND: 0,
  PASSWORD_INCORRECT: 1,
  MAX_ATTEMPTS: 2,
  DEACTIVATED: 3
});

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  user.id = user._id;
  delete user._id;
  delete user.__v;
  delete user.updatedAt;
  delete user.password;
  delete user.enabled;
  return user;
};

UserSchema.statics.getAuthenticated = function (email, password, cb) {
  this.findOne({ email: email }, function (err, user) {
    if (err) return cb(err);

    // If user was not found
    if (!user) return cb(null, null, reasons.NOT_FOUND);

    // Validate password
    user.comparePassword(password, function (err, isMatch) {
      if (err) return cb(err);

      // Password Valid
      if (isMatch) {
        // If user is deactivated
        if (!user.enabled) return cb(null, null, reasons.DEACTIVATED);
        // User is OK
        return cb(null, user, null);
      }

      // Password is Invalid
      return cb(null, null, reasons.PASSWORD_INCORRECT);
    });
  }).select('+password +enabled');
};

UserSchema.plugin(mongoosePaginate);
module.exports = model('User', UserSchema);
