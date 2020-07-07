const query = require('../database/queries/getForms');
exports.getForms = (req, res) => {
	const employeeID = req.params.employeeID;
	query(employeeID)
		.then((data) => {
			if (data.length != 0) {
				res.json(data);
			} else {
				res.status(404).json({ message: ' Employee form Not Found' });
			}
		})
		.catch((err) => err);
};
