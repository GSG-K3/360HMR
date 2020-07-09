const getQuestionsQuery = require('../database/queries/getQuestionsQuery');

const getQuestions = (req, res) => {
	getQuestionsQuery()
		.then((result) => {
			if (!result) {
				return res
					.status(401)
					.send({ message: 'Couldnt get the questions from the db' });
			}
			res.send(result.rows);
		})
		.catch((err) => console.log(err));
};

module.exports = getQuestions;
