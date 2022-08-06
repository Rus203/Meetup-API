import 'dotenv/config';
import express from 'express';
import passport from 'passport';

import routings from './routers/index.js';
import sequelize from '../sequelize/index.js';
import strategy from '../passport/index.js';
import errorHandleMiddleware from './middleware/errorHandleMiddleware.js';
import { initRoles, deleteFiredTokens } from '../sequelize/databaseUtils.js';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

sequelize.sync({ alter: true }).then(
  () => {
    console.log('All models have been synchronized');
    initRoles();
    deleteFiredTokens();
  },
  (error) => console.log(error)
);

passport.use(strategy);
app.use(passport.initialize());

app.use(express.json());
app.use(routings);

app.use(errorHandleMiddleware);

app.listen(PORT, HOST, () => {
  console.log('Server is launched on the port - ' + PORT);
});
