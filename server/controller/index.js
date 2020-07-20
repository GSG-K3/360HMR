const router = require('express').Router();
const insertQuestions = require('./insertQuestions');
const getQuestions = require('./getQuestions');
const { getForms } = require('./forms/getForms');
const addNewEmployee = require('./employees/addNewEmployee');
const getEmployees = require('./employees/getEmployees');
const getEmpById = require('./employees/getEmpById');

router.post('/api/dashboard/form', insertQuestions);
router.get('/dashboard/form', getQuestions);
router.get('/api/forminfo/:employeeID', getForms);
router.post('/api/dashboard/newemployee', addNewEmployee);
router.get('/api/employees', getEmployees);
router.get('/api/history/:id', getEmpById);

module.exports = router;
