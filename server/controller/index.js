const router = require('express').Router();
const { getForms } = require('./forms/getForms');

router.get('/api/forminfo/:employeeID', getForms);

const addNewEmployee = require('./employees/addNewEmployee');
const getEmployees = require('./employees/getEmployees');
const getEmpById = require('./employees/getEmpById');

router.post('/api/dashboard/newemployee', addNewEmployee);
router.get('/api/employees', getEmployees);
router.get('/api/history/:id', getEmpById);

router.get('/like', (req, res) => {
	res.send('hello from back');
});
module.exports = router;
