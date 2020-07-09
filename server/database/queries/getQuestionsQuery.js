const db_connection = require('../config/db_connection');

const getQuestionsQuery = () => {
	const sql = {
		text: 'SELECT * FROM questions;',
	};
	return db_connection.query(sql.text);
};

module.exports = getQuestionsQuery;
