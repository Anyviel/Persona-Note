import {Request, Response} from 'express';
import db from '../database/connection';

export default class CharsControllers {
  async index(request: Request, response: Response) {
    
  }

  async create(request: Request, response: Response) {
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
    
    const trx = await db.transaction();
    
    try {
  
      const insertedCharsIds = await trx('chars').insert({
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
  
      await trx('skills').insert({
        skill_name,
        skill_bio,
        char_id
      })
  
      await trx('universes').insert({
        universe_name,
        universe_bio,
        char_id
      })
  
      await trx.commit();
  
      return response.status(201).send();
    } catch (err) {
      console.log(err);
  
      await trx.rollback() 
  
      return response.status(400).json({
        error: 'Algo inesperado ocorreu durante o acessos aos Registros Akashicos.'
      });
    }
  }
}