const { Pool } = require('pg');

require('env2')('./config.env');

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error('Cannot reach to database check your code please!');
}
module.exports = new Pool({
  connectionString: connectionString,
  ssl: true,
});
