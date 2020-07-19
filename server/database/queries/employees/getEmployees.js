const connection = require('../../config/db_connection');

module.exports = () => {
	const sql = {
		text:
			'select DISTINCT name,id,image from employees INNER JOIN forms ON forms.reviewer_name = employees.name INNER JOIN employee_form ON forms.id =employee_form.form_id WHERE forms.reviewer_name IS NOT NULL;',
	};
	return connection.query(sql.text);
};
