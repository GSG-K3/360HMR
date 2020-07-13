const router = require('express').Router();
const insertQuestions = require('./insertQuestions');
const getQuestions = require('./getQuestions');

router.post('/api/dashboard/form', insertQuestions);
router.get('/dashboard/form', getQuestions);

router.get('/like', (req, res) => {
	res.send('hello from back');
});
module.exports = router;
