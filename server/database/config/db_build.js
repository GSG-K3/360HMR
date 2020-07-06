const fs = require('fs');
const path = require('path');

const dbConnection = require('./db_connection');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();

const runDbBuild = (sql) => {
	return dbConnection
		.query(sql)
		.then((res) => res)
		.catch((err) => err);
};

runDbBuild(sql);

module.exports = runDbBuild;
