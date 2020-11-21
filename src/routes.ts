import express, { response } from 'express';
import CharsControllers from './controllers/CharsController';
import db from './database/connection';

const routes = express.Router();

const charsControllers = new CharsControllers();

routes.get('/chars', charsControllers.index);
routes.post('/chars', charsControllers.create);

export default routes;