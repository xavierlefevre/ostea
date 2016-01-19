//news routes for Ostea

//call to external libraries
var express     = require('express'),
    router      = express.Router(),
    passport    = require("passport"),
    User        = require("../models/user"),
    New         = require("../models/news");
    
//---------------
//    ROUTES
//---------------

//NEW - Get News Form
router.get("/new", function(req, res){
   res.render("news/new"); 
});

//NEW - Post News
router.post("/", function(req, res){
    // Create a new news and save
    New.create(req.body.news, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to campgrounds page
            console.log(newlyCreated);
            res.redirect("/");
        }
    });
});

//EDIT - Get News Form
router.get("/:id/edit", function(req, res){
    New.findById(req.params.id, function(err, foundNews){
        res.render("news/edit", {newz: foundNews});
    });
});

//UPDATE - Put News
router.put("/:id", function(req, res){
    // find and update the correct campground
    New.findByIdAndUpdate(req.params.id, req.body.news, function(err, updatedNews){
       if(err){
           console.log(err);
           res.redirect("/");
       } else {
           //redirect somewhere(show page)
           res.redirect("/");
       }
    });
});

//DESTROY - Delete News
router.delete("/:id", function(req, res){
   New.findByIdAndRemove(req.params.id, function(err){
      if(err){
          console.log(err);
          res.redirect("/");
      } else {
          res.redirect("/");
      }
   });
});

//export routes
module.exports = router;