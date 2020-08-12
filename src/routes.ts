import express from 'express';
import db from './database/connection';

const routes = express.Router();

routes.post('/chars', async (request, response) => {
  const {
    name,
    age,
    avatar,
    bio,
    height,
    weight,
    race,
    left_eye_color,
    right_eye_color,
    hair_color,
    skill_name,
    skill_bio,
    universe_name,
    universe_bio,
  } = request.body;

  const insertedCharsIds = await db('chars').insert({
    name,
    age,
    avatar,
    bio,
    height,
    weight,
    race,
    left_eye_color,
    right_eye_color,
    hair_color
  });

  const char_id = insertedCharsIds[0];

  await db('skills').insert({
    skill_name,
    skill_bio,
    char_id
  })

  await db('universes').insert({
    universe_name,
    universe_bio,
    char_id
  })

  return response.send();
});

export default routes;