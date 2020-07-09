const router = require('express').Router();
const insertQuestions = require('./insertQuestions');
const getQuestions = require('./getQuestions');

router.post('/api/dashboard/form', insertQuestions);
router.get('/dashboard/form', getQuestions);

module.exports = router;
