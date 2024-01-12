require("dotenv").config();
const express = require("express");
const connDB = require("./conn");
const cors = require("cors");
const passport = require("passport");
const authRoute = require("./routes/auth");
const cookieSession = require("cookie-session");
const passportStrategy = require("./passport");
const userRouter = require("./routes/user");
const currRouter = require("./routes/current");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(
  cookieSession({
    name: "session",
    keys: ["vasukotadiya"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "https://spotify-player-g24.vercel.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
connDB();
app.use("/auth", authRoute);
app.use("/user", userRouter);
app.use("/curr", currRouter);

app.listen(9002, () => {
  console.log("Server running on port 9002");
});
