const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const {isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");


// NEW MIDDLEWARE: To transform image URL string to object
const transformImage = (req, res, next) => {
  if (req.body.listing && typeof req.body.listing.image === 'string') {
    req.body.listing.image = {
      url: req.body.listing.image,
      filename: 'listingimage'
    };
  }
  next();
};


//Index Route
router.get(
    "/", 
    wrapAsync(listingController.index));


//New Route
router.get("/new",isLoggedIn, listingController.renderNewForm);

//Show Route
router.get("/:id", wrapAsync(listingController.showListing));

//Create Route
router.post("/",
  isLoggedIn,
 transformImage,
 validateListing,
 wrapAsync(listingController.createListings)
);

//Edit Route
router.get("/:id/edit",
  isLoggedIn,
  isOwner,
   wrapAsync(listingController.renderEditForm));

//Update Route
router.put("/:id",
  isLoggedIn,
  isOwner,
  validateListing,
   wrapAsync(listingController.updateListings));

//Delete Route
router.delete("/:id", 
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.deleteListing));


module.exports = router;