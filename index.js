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
  // cors({
  //   origin: "https://tuneify-g19.vercel.app",
  //   // origin: "http://localhost:3000",
  //   methods: "GET,POST,PUT,DELETE",
  //   credentials: true,
  // })
  cors({
    origin:"*",
      methods: "GET,POST,PUT,DELETE",
  })
);
connDB();
app.use("/auth", authRoute);
app.use("/user", userRouter);
app.use("/curr", currRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
