const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { deserialiseById } = require('../controllers/User');
const User = require('../models/User');

passport.use(
  new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.getAuthenticated(email, password, function (err, user, reason) {
      if (err) throw err;

      // Successful Login
      if (user) {
        return done(null, user);
      }

      // Determine why not successful
      var reasons = User.failedLogin;
      switch (reason) {
        case reasons.NOT_FOUND:
        case reasons.PASSWORD_INCORRECT:
          done(null, null, { error: 'Invalid credentials.' });
          break;
        case reasons.MAX_ATTEMPTS:
          done(null, null, { error: 'Exceeded maximum login attempts.' });
          break;
        case reasons.DEACTIVATED:
          done(null, null, { error: 'Account is deactivated.' });
          break;
      }
    });
  })
);

// Tell Passport how to serialize the user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Tell Passport how to deserialize the user
passport.deserializeUser((id, done) => {
  deserialiseById(id)
    .then((user) => done(null, user))
    .catch((error) => done(error, false));
});

module.exports = passport;
