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
    role: {
      type: String,
      enum: ['STANDARD', 'MODERATOR', 'ANALYST', 'ADMIN'],
      default: 'STANDARD'
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

UserSchema.plugin(mongoosePaginate);
module.exports = model('User', UserSchema);
