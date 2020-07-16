const getEmployeesBy = require('../../database/queries/employees/getEmployees');

const getEmployees = (req, res) => {
	getEmployeesBy()
		.then((data) => {
			res.status(200).json({ data: data.rows, message: 'employee details' });
		})
		.catch((err) => {
			res.status(501).json({ message: 'internal error with the server' });
		});
};
module.exports = getEmployees;
