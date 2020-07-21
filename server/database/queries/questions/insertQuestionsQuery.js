const dbConnection = require('../../config/db_connection');

const insertQuestionsQuery = (questions) => {
	const sql = {
		text: 'INSERT INTO questions(type,context) VALUES($1,$2);',
		values: [questions.type, questions.content],
	};
	return dbConnection.query(sql.text, sql.values);
};

module.exports = insertQuestionsQuery;
