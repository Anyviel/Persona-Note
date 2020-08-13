import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('skills', table => {
    table.increments('id').primary();
    table.string('skill_name').notNullable();
    table.string('skill_bio', 1000).notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('skills');
};