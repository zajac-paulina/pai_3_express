var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var name = req.query.name;
        res.send(`Witaj ` + name);
 });

 router.get('/:name', function(req,res, next){
    var name = req.params.name;
    res.send(`Witaj ` + name);
 });

 module.exports = router;