const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "1042566334021-vk80pfuigrjpan836miq4ma3135cqq1k.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
      scope: ["profile", "email"],
    },
    function (accessToken, refreshToken, profile, callback) {
      callback(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
