import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import addRoutes from './routes.js';

dotenv.config();

const app = express();

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

addRoutes(app);

app.listen(process.env.PORT, () => {
  console.log(`server listening on port ${process.env.PORT}!`);
});
