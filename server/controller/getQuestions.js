const getQuestionsQuery = require('../database/queries/getQuestionsQuery');

const getQuestions = (req, res) => {
	getQuestionsQuery()
		.then((result) => {
			if (!result) {
				return res
					.status(500)
					.send({ message: 'Couldnt get the questions from the db' });
			}
			res.status(200).send(result.rows);
		})
		.catch((err) =>
			res
				.status(500)
				.send({ message: 'Couldnt get the questions from the db' }),
		);
};

module.exports = getQuestions;
