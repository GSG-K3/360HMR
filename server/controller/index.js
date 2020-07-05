const router = require('express').Router();

router.get('/like', (req, res) => {
	res.send('hello from back');
});
module.exports = router;
