const router = require('express').Router();
const { getForms } = require('./getForms');

router.get('/api/forminfo/:employeeID', getForms);

module.exports = router;
