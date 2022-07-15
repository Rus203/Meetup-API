import 'dotenv/config'

import { routing } from './routers/index.js'
import { sequelize } from './models/index.js'
import express from 'express'

import { errorHandleMiddleware } from './middleware/errorHandleMiddleware.js'
import { notFoundMiddleware } from './middleware/notFoundMiddleware.js'

const HOST = process.env.HOST
const PORT = process.env.PORT


const server = express()

sequelize.sync({ alter: true })
try {
  server.use(express.json())
} catch (error) {
  console.log(error)
  next(error)
}
  


server.use(routing)

server.use('/*', notFoundMiddleware)
server.use(errorHandleMiddleware)

sequelize.sync({ alter: true }).then(
  () => console.log('the synchronization was completed successfully'),
  err => console.log(err)
)

server.listen(PORT, HOST, () => {
  console.log(`the server is running on the ${PORT} port`)
})
