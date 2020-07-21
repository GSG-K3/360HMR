const db_connection = require('../../config/db_connection');

const getForms = (employeeID) => {
	const sql = {
		text:
			'select DISTINCT e.id employee_id,f.reviewer_name from employees e, forms f , employee_form ef where e.id=$1 AND ef.form_id=f.id;',

		values: [employeeID],
	};

	return db_connection.query(sql);
};
module.exports = getForms;
