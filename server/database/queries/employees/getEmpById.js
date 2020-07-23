const db_connection = require('../../config/db_connection');

const getForms = (employeeID) => {
	const sql = {
		text:
			'select DISTINCT reviewer_name, employee_id from employees_questions where employee_id=$1;',
		values: [employeeID],
	};

	return db_connection.query(sql);
};
module.exports = getForms;
