const postNewEmployee = require('../../database/query/employee/postNewEmployee');

const addNewEmployee = (req, res) => {
	const Empdata = req.body;

	postNewEmployee(Empdata)
		.then((data) => {
			res
				.status(200)
				.json({ data: null, message: 'employee added succesfuly' });
		})
		.catch((err) => {
			console.log('Error in post Employee : ', err);
			res
				.status(501)
				.json({ data: null, message: 'internal error with the server' });
		});
};
module.exports = addNewEmployee;
