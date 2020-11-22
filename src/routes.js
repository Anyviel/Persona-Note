const express = require('express');
const CharsControllers = require('./controllers/CharsController');
const SkillsControllers = require('./controllers/SkillsController');
const UniversesControllers = require('./controllers/UniverseControllers');
// import db from './database/connection';

const routes = express.Router();

const charsControllers = new CharsControllers();
const skillsControllers = new SkillsControllers();
const universesControllers = new UniversesControllers();

routes.get('/chars', charsControllers.index);
routes.get('/skills', skillsControllers.index);
routes.get('/universes', universesControllers.index);

routes.post('/chars', charsControllers.create);

module.exports = routes;