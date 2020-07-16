const router = require('express').Router();
const insertQuestions = require('./insertQuestions');
const getQuestions = require('./getQuestions');
const { getForms } = require('./forms/getForms');
const addNewEmployee = require('./employees/addNewEmployee');

router.post('/api/dashboard/form', insertQuestions);
router.get('/dashboard/form', getQuestions);
router.get('/api/forminfo/:employeeID', getForms);
router.post('/api/dashboard/newemployee', addNewEmployee);

module.exports = router;
