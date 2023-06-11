var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('World!');
 });

 router.get('/:witaj', function(req,res, next){
    const name = req.params.name;
    res.send(`Witaj ${witaj}!`);
 });

 router.get('/:name', function(req,res, next){
    const name = req.params.name;
    res.send(`Witaj ${name}!`);
 });

 module.exports = router;