require('dotenv-safe').config();
const { connectDB } = require('./app/models');
const { v4 } = require('uuid');
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const passport = require('./app/middleware/passport');
const path = require('path');
const session = require('express-session');

// Express App
const app = express();
app.use(cors());
app.use(helmet());
app.use(logger('dev'));

// Extract Environment Variables
const { NODE_ENV, PORT, SESSION_KEY } = process.env;
const port = PORT || 9000;

if (NODE_ENV === 'production') {
  console.info('ENVIRONMENT: Production');
}

// API Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add Session Middleware
app.use(
  session({
    genid: () => v4(),
    store: false,
    secret: SESSION_KEY,
    cookie: { maxAge: 7 * 24 * 3600000 },
    resave: false,
    saveUninitialized: true
  })
);

// Init Passport
app.use(passport.initialize());
app.use(passport.session());

// API Routes (in production, it falls back to React Router)
const router = express.Router();
router.use('/auth', require('./app/routes/Auth'));
router.use('/users', require('./app/routes/Users'));
router.use('/admin', require('./app/routes/Admin'));
router.use('/evidence', require('./app/routes/Evidence'));

app.use('/api/v1', router);

// In Production, serve React build
if (NODE_ENV === 'production') {
  // Serve Static Files
  app.use(express.static(path.join(__dirname, '../client/build')));

  // Route all requests to client router
  app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// Connect to DB
connectDB()
  .then(async () => {
    // Serve API
    app.listen(PORT, () => {
      console.info('----------');
      console.info('🚀  Database Connected!');
      console.info(`🚀  API Server listening on port ${port}`);
      console.info('----------');
    });
  })
  .catch((err) => console.log(`DB Connection Error: ${err.message}`));

module.exports = app;
