const insertQuestionsQuery = require('../database/queries/insertQuestionsQuery');

const insertQuestions = (req, res) => {
	const questions = req.body;
	insertQuestionsQuery(questions)
		.then((result) => {
			if (!result) {
				return res
					.status(401)
					.send({ message: 'Couldnt insert the data into the db' });
			}
			if (result.rowCount >= 1) {
				return res.send({ message: 'data has been inserted sucessfully' });
			}
		})
		.catch((err) => console.log(err));
};

module.exports = insertQuestions;
