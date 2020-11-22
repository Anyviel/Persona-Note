const db = require('../database/connection');

class CharsControllers {
  async index(request, response) {
    // const filters = request.query;

    // if (!filters.name || !filters.universe_name || !filters.skill_name) {
    //   return response.status(400).send({
    //     error: "Error, não há filtros para serem verificados."
    //   })
    // }

    const characters = await db('chars').select('*');
    const serializedChars = characters.map(character => {
      console.log(character)
      return {
        id: character.id,
        name: character.name,
        age: character.age,
        avatar: character.avatar,
        bio: character.bio,
        height: character.height,
        weight: character.weight,
        race: character.race,
        l_eye_color: character.left_eye_color,
        r_eye_color: character.right_eye_color,
        hair_color: character.hair_color,
      }
    })
    // console.log(characters);
    // console.log(serializedChars);
    return response.json(serializedChars);
  }

  async create(request, response) {
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

    // console.log(skills);
    
    const trx = await db.transaction();
    
    try {  
        trx('chars').insert({
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
        }).then(async (res) => {
    
          console.log('resposta callbackhell', res);

        const char_id = res[0];
        console.log("Aqui começa outro log", char_id);
        
        const skillList = skills.map((skillItem) => {
          return {
            skill_name: skillItem.skill_name,
            skill_bio: skillItem.skill_bio
          }
        })

        for (let i = 0; i < skillList.length; i++) {
          const response = await trx('skills').insert(skillList[i])

          console.log("Começamos a merda por aqui feelsOkay", response);
          const skill_id = response;


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
      })
    } catch (err) {
      console.log(err);
  
      await trx.rollback() 
  
      return response.status(400).json({
        error: 'Algo inesperado ocorreu durante o acessos aos Registros Akashicos.'
      });
    }
  }
}

module.exports = CharsControllers;
