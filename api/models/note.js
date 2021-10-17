const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userId: String,
  content: String,
});

module.exports = mongoose.model("Note", noteSchema);
