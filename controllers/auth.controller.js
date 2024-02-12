const express = require('express');
const router = express.Router();

router.route("/")
    .get(function(req, res, next) {
        // Handle GET request for /
    })
    .post(function(req, res, next) {
        // Handle POST request for /
    });

router.route("/login")
    .get(function(req, res, next) {
        res.render("login.pug", {
            title: "login page",
            message: "login message reflected in runtime from controller to view"
        });
    })
    .post(function(req, res, next) {
  console.log("req-body >>",req.body)

        res.redirect("/userdashbord");
    });

router.post("/userdashbord", function(req, res, next) {


    res.render('index.pug', {
        title: "userdashbord",
        message: "redirect to userdashbord"
    });
});

router.route("/register")
    .post(function(req, res, next) {
        // Handle POST request for /register
    });

module.exports = router;
