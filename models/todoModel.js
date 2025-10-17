const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  time: { type: Date, default: Date.now },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "completed"],
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);

module.exports = TodoModel;
