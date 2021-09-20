const env = {
  database: '${DATABASE_DB}',
  username: '${DATABASE_USER}',
  password: '${DATABASE_PASS}',
  host: '${DATABASE_HOST}',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;
