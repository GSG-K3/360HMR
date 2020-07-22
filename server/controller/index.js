const router = require('express').Router();
const insertQuestions = require('./questions/insertQuestions');
const getQuestions = require('./questions/getQuestions');
const { getForms } = require('./forms/getForms');
const addNewEmployee = require('./employees/addNewEmployee');
const getEmployees = require('./employees/getEmployees');
const getEmpById = require('./employees/getEmpById');
const getEmployeesForSelection = require('./selection/getEmployeesForSelection');

router.post('/api/dashboard/form', insertQuestions);
router.get('/dashboard/form', getQuestions);
router.get('/api/forminfo/:employeeID', getForms);
router.get('/dashboard/form/selection', getEmployeesForSelection);
router.post('/api/dashboard/newemployee', addNewEmployee);
router.get('/api/employees', getEmployees);
router.get('/api/history/:id', getEmpById);

module.exports = router;
