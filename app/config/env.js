const env = {
  database: process.env.PGDATABASE,
  username: process.env.PGUSER,
  password: process.env.PGPASS,
  host: process.env.PGHOST,
  dialect: process.env.PGDIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;
