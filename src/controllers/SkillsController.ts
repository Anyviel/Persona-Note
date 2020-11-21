import {Request, Response} from 'express';
import db from '../database/connection';

interface SkillItem {
  id: Number,
  skill_name: String;
  skill_bio: String;
}

export default class SkillsControllers {
  async index(request: Request, response: Response) {
    const skills = await db('skills').select('*');

    const serializedSkills = skills.map((skill: SkillItem) => {
      return {
        id: skill.id,
        name: skill.skill_name,
        bio: skill.skill_bio
      }
    });

    return response.json(serializedSkills);
  }
}