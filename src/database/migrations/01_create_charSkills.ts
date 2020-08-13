import Knex from 'knex';

export async function up(knex: Knex) {
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

export async function down(knex: Knex) {
  return knex.schema.dropTable('char_skills');
};