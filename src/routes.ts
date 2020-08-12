import express from 'express';

const routes = express.Router();

routes.post('/chars', (request, response) => {
  const {
    name,
    age,
    avatar,
    bio,
    height,
    weight,
    left_eye_color,
    right_eye_color,
    hair_color,
    skill_name,
    skill_bio,
    universe_name,
    universe_bio,
  } = request.body;

  console.log(data)

  return response.send();
});

export default routes;