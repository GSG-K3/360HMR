const connection = require('../../config/db_connection');

module.exports = () => {
	const sql = {
		// text: 'select name,id from employees;',
		text:
			'select DISTINCT e.id employee_id, e.name from employees e, forms f , employee_form ef where e.id=ef.employee_id AND ef.form_id=f.id;',
	};
	return connection.query(sql.text);
};
