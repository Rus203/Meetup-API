import 'dotenv/config'

import { routing } from './routers/index.js'
import { models, sequelize } from './models/index.js'
import express from 'express'

import { errorHandleMiddleware } from './middleware/errorHandleMiddleware.js'
import { notFoundMiddleware } from './middleware/notFoundMiddleware.js'
import passport from 'passport'
import strategy from './passport/passport.js'

const HOST = process.env.HOST
const PORT = process.env.PORT


const server = express()
server.use(express.json())


passport.use(strategy)
server.use(passport.initialize())
server.use(routing)

server.use('/*', notFoundMiddleware)
server.use(errorHandleMiddleware)

sequelize.sync({ true: true }).then(
  () => {
    console.log('the synchronization was completed successfully')
    models.roleModel.create({name: 'user'})
    models.roleModel.create({name: 'organizer'})
  },
  err => console.log(err)
)

server.listen(PORT, HOST, () => {
  console.log(`the server is running on the ${PORT} port`)
})
