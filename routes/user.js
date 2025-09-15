const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const user = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");


 router.get("/signup", (req,res) => {
    res.render("users/signup.ejs");
 });

router.post("/signup", wrapAsync(userController.postUser)
);

router.get("/login",(req,res) => {
    res.render("users/login.ejs");
} );

router.post
    ("/login",
    saveRedirectUrl,
    passport.authenticate("local", 
    {failureRedirect: '/login', 
    failureFlash: true }), 
    async(req,res)=> {
        req.flash("success","Welcome to Wanderlust!! You Are Logged in!" );
        let redirectUrl = res.locals.redirectUrl || "/listings";
        res.redirect(redirectUrl);

    }
    );

router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings");
    });
});
module.exports = router;
