import {Request, Response} from 'express';
import db from '../database/connection';

export default class UniversesControllers {
  async index(request: Request, response: Response) {
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