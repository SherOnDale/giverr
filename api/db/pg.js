const Pool = require('pg').Pool;

const pg = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

pg.on('error', () => console.log('Lost connection to the database'));

pg.query(
  'CREATE TABLE IF NOT EXISTS users (ID SERIAL PRIMARY KEY, email VARCHAR(30), hash VARCHAR(30))'
).catch(error => console.log(error));

module.exports = pg;
