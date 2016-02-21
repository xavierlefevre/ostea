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
          res.render("landing",{news:allNews, url:"Accueil"});
       }
    });
});

//GET - Osteo route
router.get('/osteopathie', function(req, res){
    res.render("osteo", {url: 'Osteopathie'});
});

//GET - service route
router.get('/prestations', function(req, res){
    res.render("service", {url: 'Prestations'});
});

//GET - contact route
router.get('/equipe', function(req, res){
    res.render("contact", {url: 'Equipe'});
});

//GET - Get Login Form
router.get('/login', function(req, res){
    res.render("login", {url: 'Login'});
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