const getQuestionsQuery = require('../../database/queries/questions/getQuestionsQuery');

const getQuestions = (req, res, next) => {
	getQuestionsQuery()
		.then((result) => {
			if (!result) {
				return res
					.status(400)
					.send({ message: 'Couldnt get the questions from the db' });
			}
			res.status(200).send(result.rows);
		})
		.catch((err) => {
			next(err);
			// res.status(500).send({ message: 'Internal Server Error' });
		});
};

module.exports = getQuestions;
