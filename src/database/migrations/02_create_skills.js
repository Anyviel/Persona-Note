module.exports.up = async function up(knex) {
  return knex.schema.createTable('skills', table => {
    table.increments('id').primary();
    table.string('skill_name').notNullable();
    table.string('skill_bio', 1000).notNullable();
  });
}

module.exports.down = async function down(knex) {
  return knex.schema.dropTable('skills');
};