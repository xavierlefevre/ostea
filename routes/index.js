//main routes for Ostea

//call to external libraries
var express     = require('express'),
    router      = express.Router();

//---------------
//    ROUTES
//---------------

//landing route
router.get('/', function(req, res){
    res.render("landing", {url: ''});
});

//osteo route
router.get('/osteopathie', function(req, res){
    res.render("osteo", {url: 'osteopathie'});
});

//service route
router.get('/service', function(req, res){
    res.render("service", {url: 'service'});
});

//about route
router.get('/apropos', function(req, res){
    res.render("about", {url: 'apropos'});
});

//contact route
router.get('/contact', function(req, res){
    res.render("contact", {url: 'contact'});
});

//login route
router.get('/login', function(req, res){
    res.render("login", {url: 'login'});
});

//export routes
module.exports = router;