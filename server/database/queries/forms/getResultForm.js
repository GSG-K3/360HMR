const db_connection = require('../../config/db_connection');

const getResultForm = (employeeID, reviewer_name) => {
	const sql = {
		text:
			' SELECT e.name employee_form,f.reviewer_name ,q.context question,q.type,eq.answer context_answer FROM questions q, employees e,employees_questions eq,form_questions fq,forms f WHERE e.id=eq.employee_id AND q.id=eq.question_id AND fq.form_id=f.id AND fq.question_id=q.id AND eq.employee_id=$1 AND f.reviewer_name=$2;',

		values: [employeeID, reviewer_name],
	};

	return db_connection.query(sql);
};
module.exports = getResultForm;
