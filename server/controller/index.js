const router = require('express').Router();

const { addNewEmployee } = require('./employee');

router.post('/api/dashboard/newemployee', addNewEmployee);

module.exports = router;
