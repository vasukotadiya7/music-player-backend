const modelCurrent = require("../models/current");
const Current = modelCurrent.Current;
const Router = require("router");
const router = Router();

router.post("/update", async (req, res) => {
  try {
    const { sid, currentPlaying, current } = req.body;
    let success = true;
    const curr = {
      sid: sid,
      currentTrack: currentPlaying,
      currentSong: current,
    };
    let doc = await Current.findOneAndUpdate({ sid: sid }, curr);
    console.log(doc);
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

router.get("/get", async (req, res) => {
  try {
    const { sid } = req.body;
    const curr = await Current.find({ sid: sid });
    res.send(curr);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
