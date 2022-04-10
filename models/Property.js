const mongoose = require("mongoose");
const { Schema } = mongoose;

const PropertySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

const Property = mongoose.model("property", PropertySchema);
module.exports = Property;
