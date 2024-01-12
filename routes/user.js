const modelUser = require("../models/user");
const User = modelUser.User;
const Router = require("router");
const router = Router();

router.post("/register", async (req, res) => {
  try {
    const { useremail, username } = req.body;
    let success = true;
    const ex = User.find({ useremail: useremail });
    if (!ex) {
      console.log("user already registred");
      console.log(ex);
    } else {
      const UserDetails = new User({
        useremail: useremail,
        username: username,
      });
      const user = await UserDetails.save();
      console.log(user);
      return res.status(200).json({
        success: true,
        user: user,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
});

router.get("/allusers", async (req, res) => {
  try {
    const allusers = await User.find({});
    res.send(allusers);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
