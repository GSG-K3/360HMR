const getEmployeesForSelectionQuery = require('../../database/queries/selection/getEmployeesForSelectionQuery');

const getEmployeesForSelection = (req, res, next) => {
	getEmployeesForSelectionQuery()
		.then((data) => {
			res.status(200).json({ data: data.rows, message: 'employees names' });
		})
		.catch((err) => {
			next(err);
		});
};
module.exports = getEmployeesForSelection;
