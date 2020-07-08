const db_connection = require('../config/db_connection');

const insertQuestionsQuery = (questions) => {
	const sql = {
		text: 'INSERT INTO questions(type,context) VALUES($1,$2);',
		values: [questions.type, questions.content],
	};
	return db_connection.query(sql.text, sql.values);
};

module.exports = insertQuestionsQuery;
