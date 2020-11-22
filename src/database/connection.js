const knex = require('knex');
const path = require('path');

const db = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  // connection: {
  //   filename: path.resolve(__dirname, 'database.sqlite')
  // },
  useNullAsDefault: true
});

module.exports = db;