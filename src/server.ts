import express from 'express';
import routes from './routes';

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);