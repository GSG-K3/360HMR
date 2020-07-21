const getanswers = require('../../database/queries/forms/getResultForm');

const getResultForm = (req, res) => {
	const id = req.params.id;
	const name = req.params.name;
	getanswers(id, name)
		.then((data) => {
			res.status(200).json({ data: data.rows, message: 'employee details' });
		})
		.catch((err) => {
			res.status(501).json({ message: 'internal error with the server' });
		});
};
module.exports = getResultForm;
