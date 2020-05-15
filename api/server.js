require('dotenv-safe').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const { connectDB } = require('./app/models');

// Express App
const app = express();
app.use(cors());
app.use(helmet());
app.use(logger('dev'));

// Extract Environment Variables
const { NODE_ENV, PORT } = process.env;

if (NODE_ENV === 'production') {
  console.info('ENVIRONMENT: Production');
}

// API Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes (in production, it falls back to React Router)
const router = express.Router();
router.use('/users', require('./app/routes/Users'));

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

// Serve API
const port = PORT || 9000;
// Connect to DB
connectDB()
  .then(async () => {
    app.listen(PORT, () => {
      console.info('----------');
      console.info('🚀  Database Connected!');
      console.info(`🚀  API Server listening on port ${port}`);
      console.info('----------');
    });
  })
  .catch((err) => console.log(`DB Connection Error: ${err.message}`));

module.exports = app;
