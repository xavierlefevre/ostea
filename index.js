//main app controller for Ostea

//call to external libraries
var express         = require('express'),
    bodyParser      = require('body-parser'),
    app             = express(),
    mongoose        = require('mongoose'),
    passport        = require("passport"),
    LocalStrategy   = require("passport-local"),
    methodOverride  = require("method-override"),
    News            = require("./models/news"),
    User            = require("./models/user"),
    seedDB          = require("./seeds")

//requiring routes
var indexRoutes = require('./routes/index'),
    newsRoutes  = require('./routes/news');


//view engine (ejs) & public directory
mongoose.connect("mongodb://localhost/ostea_1");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
seedDB(); //seed the database

//config of Passport
app.use(require("express-session")({
    secret: "Child name of Xavier's Mother?",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//what again?
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   next();
});

//Call routes (+shortening if necessary)
app.use("/", indexRoutes);
app.use("/", newsRoutes);

//server launch
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Serveur en route!');
});