const getEmployeesById = require('../../database/queries/employees/getEmpById');

const getEmpbyId = (req, res) => {
	const id = req.params.id;

	getEmployeesById(id)
		.then((data) => {
			res.status(200).json({ data: data.rows, message: 'employees names' });
		})
		.catch((err) => {
			res.status(501).json({ message: 'internal error with the server' });
		});
};
module.exports = getEmpbyId;
