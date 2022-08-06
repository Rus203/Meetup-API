import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

import userServices from '../src/services/userServices.js';

const options = {};
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
options.secretOrKey = process.env.ACCESS_SECRET;

const strategy = new JwtStrategy(options, (playLoad, done) => {
  userServices
    .readByParameter({ id: playLoad.userId })
    .then((user) => {
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((error) => done(error, false));
});

export default strategy;
