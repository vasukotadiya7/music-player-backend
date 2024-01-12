const mongoose = require("mongoose");
const currentSchema = new mongoose.Schema({
  sid: { type: String, required: true },
  //   playbacktype: { type: String, required: true },
  currentpTrack: { type: Object, required: false },
  currentSong: { type: Object, required: false },
  username: { type: String, required: false },
  email: { type: String, required: false },
});
exports.Current = new mongoose.model("Current", currentSchema);
