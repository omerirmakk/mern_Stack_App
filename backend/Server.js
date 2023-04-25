//important imports
const express = require("express");
const app = express();
const cors = require("cors");
//for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//database connection
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ToDOList", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//using the apis
const taskRouter = require("./routes/tasks");
app.use("/Tasks", taskRouter);
//listening to port 3000
app.listen(3000, () => {
  console.log("Server is running on port: 3000");
});
