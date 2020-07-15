const router = require('express').Router();
const { getForms } = require('./forms/getForms');

router.get('/api/forminfo/:employeeID', getForms);

const addNewEmployee = require('./employees/addNewEmployee');

router.post('/api/dashboard/newemployee', addNewEmployee);

router.get('/like', (req, res) => {
	res.send('hello from back');
});
module.exports = router;
