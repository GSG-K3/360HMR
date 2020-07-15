const query = require('../../database/queries/forms/getForms');
exports.getForms = (req, res) => {
	const employeeID = req.params.employeeID;
	if (employeeID == '' || employeeID == undefined) {
		res.status.json({ message: 'There is something wrong' });
	} else {
		query(employeeID)
			.then((data) => {
				if (data.length != 0) {
					res.json(data);
				} else {
					res
						.status(404)
						.json({ message: ' Employee did not  evaluated yet!' });
				}
			})
			.catch((err) => res.status(500).json({ message: "An unknown error occurred" }));
	}
};
