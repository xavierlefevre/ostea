//main app controller for Ostea

//call to external libraries
var express     = require('express'),
    bodyParser  = require('body-parser'),
    app         = express(),
    mongoose    = require('mongoose');

//requiring routes
var indexRoutes = require('./routes/index');

//view engine (ejs) & public directory
mongoose.connect("mongodb://localhost/ostea_1");
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

//routes shortening
app.use("/", indexRoutes);

//server launch
app.listen(process.env.PORT, process.env.IP, function(){
    console.log('Serveur en route!');
});