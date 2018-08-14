const mongoose = require('mongoose');
const keys = require('../../config/keys');
require('./mongo/models/User');
require('./mongo/models/Survey');


module.exports = () => {
  mongoose.connect(keys.mongoURI);
};