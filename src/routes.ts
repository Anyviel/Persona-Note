import express from 'express';
import CharsControllers from './controllers/CharsController';

const routes = express.Router();

const charsControllers = new CharsControllers();

routes.post('/chars', charsControllers.create);

export default routes;