const mongoose = require("mongoose");
const { mongoURI } = require("./mongoURI.json");

const connectDB = async () => {
  await mongoose.connect(mongoURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
};

module.exports = connectDB;
