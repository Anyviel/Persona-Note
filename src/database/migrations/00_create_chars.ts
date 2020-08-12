import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('chars', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('age').notNullable();
    table.string('bio', 2000).notNullable();
    table.string('avatar');
    table.float('height').notNullable();
    table.float('weight').notNullable();
    table.string('race').notNullable();
    table.string('left_eye_color').notNullable();
    table.string('right_eye_color').notNullable();
    table.string('hair_color').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('chars');
};