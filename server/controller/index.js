const router = require('express').Router();
const { getForms } = require('./forms/getForms');

router.get('/api/forminfo/:employeeID', getForms);

router.get('/like', (req, res) => {
	res.send('hello from back');
});
module.exports = router;
