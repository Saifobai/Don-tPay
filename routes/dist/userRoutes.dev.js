"use strict";

var express = require('express');

var router = express.Router();

var passport = require('passport');

var controller = require('../controllers/userController');

router.post('/register', controller.uploadImage, controller.register);
router.post('/login', controller.login);
router.get('/userprofile/:id', controller.profileSetting);
router.post('/resetpassword', controller.resetPassword);
router.post('/imageupload', controller.uploadImage, controller.upload); // new from saif multer

router.get("/profileImage/:id", controller.getImage); // new from saif multer
// to authorize the user with the token /// and will protect every line below this function

router.use(passport.authenticate('articleToken', {
  session: false
}));
router.put('/addToFavorite/:article_id', controller.addToFavorites);
router.get('/favorites', controller.favoritesList);
module.exports = router;