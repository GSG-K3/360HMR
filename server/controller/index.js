const router = require('express').Router();

const addNewEmployee = require('./employees/addNewEmployee');
const getEmployees = require('./employees/getEmployees');

router.post('/api/dashboard/newemployee', addNewEmployee);
router.get('/api/employees', getEmployees);

router.get('/like', (req, res) => {
	res.send('hello from back');
});
module.exports = router;
