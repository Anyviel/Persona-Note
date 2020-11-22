// import {Request, Response} from 'express';
const db = require('../database/connection');

class SkillsControllers {
  async index(request, response) {
    const skills = await db('skills').select('*');

    const serializedSkills = skills.map((skill) => {
      return {
        id: skill.id,
        name: skill.skill_name,
        bio: skill.skill_bio
      }
    });

    return response.json(serializedSkills);
  }
}

module.exports = SkillsControllers