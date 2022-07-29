import 'dotenv/config';
import express from 'express';

import routings from './routers/index.js';
import sequelize from '../sequelize/index.js';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(routings);

sequelize.sync({ alter: true }).then(
  () => {
    console.log('All models have been synchronized');
  },
  (error) => console.log(error)
);

app.listen(PORT, HOST, () => {
  console.log('Server is launched on the port - ' + PORT);
});
