const dbConnection = require('../../config/db_connection');

const getEmployeesForSelectionQuery = () => {
	const sql = {
		text: 'SELECT * FROM employees;',
	};
	return dbConnection.query(sql.text);
};

module.exports = getEmployeesForSelectionQuery;
