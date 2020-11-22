// import {Request, Response} from 'express';
const db = require('../database/connection');

class UniversesControllers {
  async index(request, response) {
    console.log("Eu existo");
    const universes = await db('universes').select('*');

    const serialUniverses = universes.map(universe => {
      return {
        name: universe.universe_name,
        bio: universe.universe_bio
      }
    })

    return response.json(serialUniverses);
  }
}

module.exports = UniversesControllers;