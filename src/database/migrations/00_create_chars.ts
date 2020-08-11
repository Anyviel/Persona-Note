import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('chars', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('age').notNullable();
    table.string('avatar');
    table.string('bio').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('chars');
};