import { ExtractJwt,  Strategy as JwtStrategy } from 'passport-jwt'

import userServices from '../services/userServices.js'

const options = {}
options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken()
options.secretOrKey = process.env.SECRET

const strategy = new JwtStrategy(options, async (playLoad, done) => {
  userServices
    .readByParameters({ id: playLoad.userId })
    .then(user => {
      if (!!user) {
        return done(null, playLoad)
      } else {
        return done(null, false)
      }
    })
    .catch(error => done(error, false))
})

export default strategy
