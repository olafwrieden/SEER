const { connect } = require('mongoose');

/**
 * Establishes a MongoDB database connection.
 */
const connectDB = () =>
  connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
  });

module.exports = { connectDB };
