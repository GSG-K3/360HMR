const connection = require('../../config/db_connection');

module.exports = () => {
	const sql = {
		text: 'select * from employees ;',
	};
	return connection.query(sql.text, sql.value);
};
