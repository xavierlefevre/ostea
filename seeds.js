var mongoose    = require("mongoose"),
    User        = require("./models/user"),
    New        = require("./models/news");

var data = [
    {
        username: "Manu", 
        password: "Manu",
    }
];

var data2 = [
    {
        title: "Ce que le tatouage dit de nous", 
        imagedest: "https://s1.yimg.com/bt/api/res/1.2/53u6wjh5Zyn_BKS4VyI6AQ--/YXBwaWQ9eW5ld3NfbGVnbztjaD0yMjA7Y3I9MTtjdz01MDA7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTg0O3E9NzU7dz0xOTA-/http://media.zenfs.com/fr_FR/News/DoctissimoPsychologies/Ce-que-le-tatouage-dit-de-nous_imagePanoramique500_220.jpg",
        content: "Qu’il soit discret ou qu’il couvre toute une partie du corps, symbolique ou purement esthétique, tout tatouage a une histoire.",
        link: "https://fr.news.yahoo.com/tatouage-dit-000011902.html"
    },
    {
        title: "Qu’est-ce qui déclenche l’orgasme ?", 
        imagedest: "https://s.yimg.com/bt/api/res/1.2/8jsRu2rz1OxejZKb3IUscA--/YXBwaWQ9eW5ld3NfbGVnbztjaD0yMjA7Y3I9MTtjdz01MDA7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTg0O3E9NzU7dz0xOTA-/http://media.zenfs.com/fr_FR/News/DoctissimoPsychologies/Qu-est-ce-qui-declenche-l-orgasme_imagePanoramique500_220.jpg",
        content: "Imprévisible et fragile, la jouissance féminine est plus mystérieuse que celle de l’homme. Moins « mécanique », elle est soumise à de nombreux paramètres émotionnels qui peuvent la bloquer.",
        link: "https://fr.news.yahoo.com/d%C3%A9clenche-orgasme-000011126.html"
    },
    {
        title: "Les bons sports pour des fesses musclées", 
        imagedest: "https://s1.yimg.com/bt/api/res/1.2/RB7SMOUoIxNirqYPm1E30Q--/YXBwaWQ9eW5ld3NfbGVnbztjaD0yMjA7Y3I9MTtjdz01MDA7ZHg9MDtkeT0wO2ZpPXVsY3JvcDtoPTg0O3E9NzU7dz0xOTA-/http://media.zenfs.com/fr_FR/News/DoctissimoPsychologies/Les-bons-sports-pour-des-fesses-musclees_imagePanoramique500_220.jpg",
        content: "Nos fesses sont faites essentiellement de muscles, raison pour laquelle il est essentiel de les faire travailler pour les galber.Voici une sélection d'activités sportives et d'exercices pour muscler notre séant !",
        link: "https://fr.news.yahoo.com/bons-sports-fesses-muscl%C3%A9es-000011158.html"
    }
];


function seedDB(){
   //Remove all users
   User.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed users!");
        //add Manu admin account
        data.forEach(function(seed){
            User.create(seed, function(err, user){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a user");
                    //create a comment
                    user.save();
                    console.log(user);
                }
            });
        });
    });
    //Remove all news
    New.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed news!");
        //add set of news
        data2.forEach(function(seed){
            New.create(seed, function(err, newz){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a news");
                    //create a comment
                    newz.save();
                    console.log(newz);
                }
            });
        });
    });
}

module.exports = seedDB;
