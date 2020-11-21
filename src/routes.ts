import express, { response } from 'express';
import CharsControllers from './controllers/CharsController';
import SkillsControllers from './controllers/SkillsController';
import UniversesControllers from './controllers/UniverseControllers';
// import db from './database/connection';

const routes = express.Router();

const charsControllers = new CharsControllers();
const skillsControllers = new SkillsControllers();
const universesControllers = new UniversesControllers();

routes.get('/chars', charsControllers.index);
routes.get('/skills', skillsControllers.index);
routes.get('/universes', universesControllers.index);

routes.post('/chars', charsControllers.create);

export default routes;