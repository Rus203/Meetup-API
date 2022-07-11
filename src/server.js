import 'dotenv/config'

import { routing } from './routers/index.js'
import { sequelize } from './models/index.js'
import express from 'express'

const HOST = process.env.HOST
const PORT = process.env.PORT


const server = express()

sequelize.sync({ alter: true })

server.use(express.json())

server.use(routing)

sequelize.sync({ alter: true }).then(
  () => console.log('the synchronization was completed successfully'),
  err => console.log(err)
)

server.listen(PORT, HOST, () => {
  console.log(`the server is running on the ${PORT} port`)
})
