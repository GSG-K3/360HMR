const fs = require('fs');
const path = require('path');

const dbConnection = require('./db_connection');

const sql = fs.readFileSync(path.join(__dirname, 'db_build.sql')).toString();
const dummy = fs.readFileSync(path.join(__dirname, 'dummyData.sql')).toString();

const runDbBuild = (sql, dummy) => {
	return dbConnection
		.query(sql)
		.then((res) => {
			dbConnection.query(dummy).then((result) => result);
		})
		.catch((err) => err);
};

runDbBuild(sql, dummy);

module.exports = runDbBuild;
