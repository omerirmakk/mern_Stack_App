const mongoose = require("mongoose");
//schema with two fields
const taskSchema = new mongoose.Schema({
  id: Number,
  details: String,
});
const taskTable = new mongoose.model("Tasks", taskSchema);
module.exports = taskTable;
