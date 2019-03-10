const Pool = require('pg').Pool;

const pg = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT
});

pg.connect((error, client, done) => {
  if (error) console.log(error);
  console.log('connected successfully');
  done();
});

pg.on('error', () => console.log('Lost connection to the database'));

pg.query(
  'CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, email VARCHAR(30) UNIQUE, hash VARCHAR(50), salt VARCHAR(15))'
).catch(error => console.log(error));

module.exports = pg;
