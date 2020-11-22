const { get } = require('http');
const knex = require('knex');
const path = require('path');
require('dotenv').config();

console.log(process.env.PROFILE);

const getConfig = (() => {
  if (process.env.PROFILE === 'dev') {
    return {
      client: 'sqlite3',
      // connection: process.env.DATABASE_URL,
      connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
      },
      useNullAsDefault: true
    }
  } else {
      return {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        useNullAsDefault: true
      }
  }
})

let db

try {
  db = knex(getConfig());
} catch (err) {
  console.log(err)
}

module.exports = db;