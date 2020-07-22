const dbConnection = require('../../config/db_connection');

const getQuestionsQuery = () => {
	const sql = {
		text: 'SELECT * FROM questions;',
	};
	return dbConnection.query(sql.text);
};

module.exports = getQuestionsQuery;
