const db_connection = require('../../config/db_connection');

exports.getResult = (employeeID, name) => {

	return db_connection.query('select * from (select * from employees_questions WHERE employee_id =$1 AND reviewer_name=$2) as RQ INNER JOIN questions ON questions.id= RQ.question_id', [employeeID, name]);

}

