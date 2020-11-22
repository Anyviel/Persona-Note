module.exports.up = async function up(knex) {
  return knex.schema.createTable('char_skills', table => {
    // table.increments('id').primary();
    
    table.integer('skill_id').unsigned().notNullable();
    table.foreign('skill_id').references('id').inTable('skills');

    // Unsigned realoca a quantidade de valores reservado para os 
    // valores negativos e os transfere para os valores positivos.
    table.integer('char_id').unsigned().notNullable(); 
    table.foreign('char_id').references('id').inTable('chars');
  });
}

module.exports.down =  async function down(knex) {
  return knex.schema.dropTable('char_skills');
};