module.exports.up = async function up(knex) {
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

module.exports.down = async function down(knex) {
  return knex.schema.dropTable('chars');
};