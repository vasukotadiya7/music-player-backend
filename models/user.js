const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  useremail: { type: String, required: true },
  username: { type: String, required: true },
});
exports.User = new mongoose.model("User", userSchema);
