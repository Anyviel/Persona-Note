import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('universes', table => {
    table.increments('id').primary();
    table.string('universe_name').notNullable();
    table.string('universe_bio', 2000).notNullable();

    table.integer('char_id').unsigned()
    table.foreign('char_id').references('id').inTable('chars')
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('universes');
};