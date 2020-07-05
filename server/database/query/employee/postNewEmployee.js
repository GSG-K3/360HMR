const connection = require('../../config/db_connection');

const postNewEmployee = (empData) => {
	const { name, email, date, position } = empData;
	const time = new Date(date);
	const id = 1;
	const sql = {
		text:
			'INSERT INTO employees (gid,name ,email,image ,date ,position ,role  ) VALUES ($1, $2, $3, $4,$5,$6,$7,$8 ,$9 , $10)',
		values: [id, name, email, 'url', date, position, 'employee '],
	};
	return connection.query(sql.text, sql.values);
};
module.exports = postNewEmployee;
