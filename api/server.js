require('dotenv-safe').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { connectDB } = require('./app/models');

// Express App
const app = express();
app.use(cors());
app.use(helmet());
app.use(logger('dev'));

if (process.env.NODE_ENV === 'production') {
  console.info('ENVIRONMENT: Production');
}

// API Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API Routes
const router = express.Router();
router.use('/users', require('./app/routes/Users'));

app.use('/api/v1', router);

// Serve API
const port = process.env.PORT || 9000;
// Connect to DB
connectDB()
  .then(async () => {
    app.listen(process.env.PORT, () => {
      console.info('----------');
      console.info('🚀  Database Connected!');
      console.info(`🚀  API Server listening on port ${port}`);
      console.info('----------');
    });
  })
  .catch((err) => console.log(`DB Connection Error: ${err.message}`));

module.exports = app;
