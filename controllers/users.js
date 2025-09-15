const User = require("../models/user.js");


module.exports.postUser=async(req,res) => {
    try{
    let{username, email, password}= req.body;
    const newUser = new User ({email, username});
    const registeredUser= await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser,(err)=>{
        if (err){
            return next(err);
        } req.flash("success", "Welcome to Wanderlust!");
    res.redirect("/listings");
    });
   
    }
    catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};


