//main routes for Ostea

//call to external libraries
var express     = require('express'),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/user"),
    New         = require("../models/news");

//---------------
//    ROUTES
//---------------

//GET - Landing route
router.get('/', function(req, res){
    // Get all news from DB
    New.find({}, function(err, allNews){
       if(err){
           console.log(err);
       } else {
          res.render("landing",{news:allNews, url:"landing"});
       }
    });
});

//GET - Osteo route
router.get('/osteopathie', function(req, res){
    res.render("osteo", {url: 'osteopathie'});
});

//GET - service route
router.get('/service', function(req, res){
    res.render("service", {url: 'service'});
});

//GET - about route
router.get('/apropos', function(req, res){
    res.render("about", {url: 'apropos'});
});

//GET - contact route
router.get('/contact', function(req, res){
    res.render("contact", {url: 'contact'});
});

//GET - Get Login Form
router.get('/login', function(req, res){
    res.render("login", {url: 'login'});
});

//POST - Login Authenticate
router.post("/login", passport.authenticate("local", 
    {
        successRedirect: "/",
        failureRedirect: "/login"
    }), function(req, res){
});

//GET - Logout
router.get("/logout", function(req, res){
   req.logout();
   res.redirect("/");
});

//export routes
module.exports = router;