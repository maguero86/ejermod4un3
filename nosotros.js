var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
	res.send('Hago un GET');
});

router.post('/', function(req, res, next){
	res.send('Hago un POST');
});

router.put('/', function(req, res, next){
	res.send('Hago un PUT');
});
	
module.exports = router;