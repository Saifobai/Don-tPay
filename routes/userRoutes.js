const express = require('express');
const router = express.Router();
const passport = require('passport');
const controller = require('../controllers/userController');


router.post('/register', controller.register);

router.post('/login', controller.login);

//forget password 
router.get('/forget', controller.getPassword);
router.post('/forget', controller.postPassword);

router.get('/userprofile/:id', controller.profileSetting);

router.post('/resetpassword', controller.resetPassword);

router.post('/imageupload',controller.uploadImage, controller.upload);  // new from saif multer

router.get("/profileImage/:id", controller.getImage);  // new from saif multer

router.get('/myarticle/user/:id', controller.userArticle);

router.get('/myarticle/:articleId', controller.userSingleArticle);




// to authorize the user with the token /// and will protect every line below this function
router.use(passport.authenticate('articleToken',{session: false}));

router.put("/userprofile/:id/edituser", controller.editUser)

router.put('/addToFavorite/:article_id', controller.addToFavorites);

router.get('/favorites', controller.favoritesList);

router.get('/favorites/remove/:id', controller.removeFromFavorite);








module.exports = router;