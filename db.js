const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://admin:admin@cluster0.yums3.mongodb.net/property-management?retryWrites=true&w=majority";

const connetToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongodb successfully");
  });
};

module.exports = connetToMongo;
