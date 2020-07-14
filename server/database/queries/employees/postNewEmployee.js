const connection = require('../../config/db_connection');
const postNewEmployee = (empData) => {
	const { name, email, date, position } = empData;

	const sql = {
		text:
			'INSERT INTO employees (name ,email,image ,date ,position ,role) VALUES ($1, $2, $3, $4,$5,$6)',
		values: [name, email, 'url', date, position, 'employee'],
	};
	return connection.query(sql.text, sql.values);
};
module.exports = postNewEmployee;
