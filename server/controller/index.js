const router = require('express').Router();
const insertQuestions = require('./insertQuestions');
router.post('/api/dashboard/form', insertQuestions);
module.exports = router;
