import {Request, Response} from 'express';
import db from '../database/connection';

interface SkillItem {
  skill_name: String;
  skill_bio: String;
}

export default class CharsControllers {
  async index(request: Request, response: Response) {
    const filters = request.query;

    if (!filters.name || !filters.universe_name || !filters.skill_name) {
      return response.status(400).send({
        error: "Error, não há filtros para serem verificados."
      })
    }
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
      skills,
      universe_name,
      universe_bio,
    } = request.body;

    console.log(skills);
    
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
  
      const skillList = skills.map((skillItem: SkillItem) => {
        return {
          skill_name: skillItem.skill_name,
          skill_bio: skillItem.skill_bio
        }
      })

      for (let i = 0; i < skillList.length; i++) {
        const [skill_id] = await trx('skills').insert(skillList[i])

        // console.log(skill_id);

        const charSkill = {
          char_id,
          skill_id
        }

        await trx('char_skills').insert(charSkill);
      }

      await trx('universes').insert({
        universe_name,
        universe_bio,
        char_id
      })
  
      await trx.commit();
  
      return response.status(201).send();
    } catch (err) {
      // console.log(err);
  
      await trx.rollback() 
  
      return response.status(400).json({
        error: 'Algo inesperado ocorreu durante o acessos aos Registros Akashicos.'
      });
    }
  }
}