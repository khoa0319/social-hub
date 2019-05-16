/* 3rd party modules */
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

/* app modules */
const pool = require('../models/database');
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "socialhub";

module.exports = passport => {
  passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
    pool.query(`SELECT * FROM STUDENT where ID = ? and ISACTIVE = true`, jwt_payload.ID)
      .then(result => {
        if (!result[0]) return done(null, false);
        return done(null, result[0]);
      })
      .catch(err => done(err, false))
  }));
}