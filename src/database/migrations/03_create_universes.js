module.exports.up = async function up(knex) {
  return knex.schema.createTable('universes', table => {
    table.increments('id').primary();
    table.string('universe_name').notNullable();
    table.string('universe_bio', 2000).notNullable();

    table.integer('char_id').unsigned().notNullable(); 
    table.foreign('char_id').references('id').inTable('chars');
  });
}

module.exports.down = async function down(knex) {
  return knex.schema.dropTable('universes');
};