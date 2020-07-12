const router = require('express').Router();

const { addNewEmployee, getEmployees } = require('./employee');

router.post('/api/dashboard/newemployee', addNewEmployee);
router.get('/api/employees', getEmployees);
module.exports = router;
