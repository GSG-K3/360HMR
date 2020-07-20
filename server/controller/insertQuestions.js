const insertQuestionsQuery = require('../database/queries/insertQuestionsQuery');

const insertQuestions = (req, res) => {
	const questions = req.body;
	if (!questions)
		return res.status(401).send({
			message: 'There is no new question has been captured from the front end',
		});
	insertQuestionsQuery(questions)
		.then((result) => {
			if (!result) {
				return res
					.status(401)
					.send({ message: 'Couldnt insert the data into the db' });
			}
			if (result.rowCount >= 1) {
				return res
					.status(200)
					.send({ message: 'data has been inserted sucessfully' });
			}
		})
		.catch((err) =>
			res.status(401).send({ message: 'Couldnt insert the data into the db' }),
		);
};

module.exports = insertQuestions;
