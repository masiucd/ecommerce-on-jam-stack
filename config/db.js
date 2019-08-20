const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.get('MangoURI'), {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Mango Db is Connected!');
  } catch (err) {
    process.exit(1);
    console.log(err.message);
  }
};

module.exports = connectDB;
