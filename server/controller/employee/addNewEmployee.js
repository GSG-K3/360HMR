const postNewEmployee = require('../../database/query/employee/postNewEmployee');

const addNewEmployee = (req, res) => {
	const employeeData = req.body;

	postNewEmployee(employeeData)
		.then(() => {
			res.status(200).json({ message: 'employee added succesfuly' });
		})
		.catch((err) => {
			res.status(501).json({ message: 'internal error with the server' });
		});
};
module.exports = addNewEmployee;
