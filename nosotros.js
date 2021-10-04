var express = require('express');
var router = express.Router();


/*router.get('/', function(req, res, next){
	res.send('Hago un GET');
});*/

router.get('/', function(req, res, next){
	if(req.query.perfil == 'admin')
		res.send('Hola usuario ADMINISTRADOR');
	if(req.query.perfil == 'dev')
		res.send('Hola usuario DESARROLLADOR');
}); 

router.post('/', function(req, res, next){
	res.send('Hago un POST');
});

router.put('/', function(req, res, next){
	res.send('Hago un PUT');
});
	
module.exports = router;