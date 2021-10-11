const userModel = require('../models/userModel');
const addressModel = require('../models/addressModel');
const articleModel = require('../models/articleModel');
const bcrypt = require('bcrypt');
const authHelper = require('../helpers/jwtissuer');
const jwt = require('jsonwebtoken')
const multer = require('multer');
const dotenv = require("dotenv");

// user register function controller
//  need to check email address
exports.register = async (req, res) => {

    const checkusername = await userModel.findOne({ username: req.body.username });

    console.log(checkusername);
    if (checkusername != null) {
        return res.status(404).json({ message: "the user is exist" })
    }

    const hashPassword = await bcrypt.hash(req.body.password, 10)
    try {
        const user = await userModel.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            hash: hashPassword,
            age: req.body.age,
            email: req.body.email,
            phone: req.body.phone,
            userimage: req.body.userimage,
            address: {
                streetname: req.body.address.streetname,
                hausnumber: req.body.address.hausnumber,
                zipcode: req.body.address.zipcode,
                city: req.body.address.city,
                land: req.body.address.land,
            }
        })
        return res.status(200).json({ message: "the user has been successfully added to the database" });
    } catch (error) {
        return res.status(400).json({ message: "there is an error", error: error.message })
    }
}

// user login function controller
exports.login = async (req, res) => {

    const user = await userModel.findOne({
        username: req.body.username
    })
    if (user === null) {
        return res.status(400).json({ message: "unser does not exist" })
    }
    try {
        const checkPassword = await bcrypt.compare(req.body.password, user.hash)
        if (checkPassword) {
            const token = authHelper.generateToken(user);
            console.log('the token Is ', token);
            jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
                if (err) console.log("there was an error")
                console.log('the content ', user)
            })
            return res.status(200).json({ message: "user is logged in", token: token, userID: user._id, username: user.username, user: user })
        } else {
            return res.status(400).json({ message: "username or password does not match" })
        }
    } catch (error) {
        return res.status(500).json({ message: "error happens when password is incorrect", error: error.message })
    }
}


exports.editUser = async (req, res) => {

    try {

        const user = await userModel.findById(req.user._id);

        const checkPassword = await bcrypt.compare(req.body.password, user.hash)

        if(user !== null && checkPassword){

            const updateduser = await userModel.findByIdAndUpdate(req.user._id, { 
                email: req.body.email,
                phone: req.body.phone,
                userimage: req.body.userimage,
                address: {
                    streetname: req.body.address.streetname,
                    hausnumber: req.body.address.hausnumber,
                    zipcode: req.body.address.zipcode,
                    city: req.body.address.city,
                    land: req.body.address.land
                }
        },{ new: true});

        return res.status(200).json({ message: "user is successfully updated", user, updateduser})
        
        }

        return res.status(500).json({ message: "user not found no exist"})

    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message })
    }
}

// profile setting
exports.profileSetting = async (req, res) => {
   try {
    const user = await userModel.findById(req.params.id);

    return res.status(200).json({ message: "user information", user: user})

   } catch (error) {
    return res.status(400).json({ message: "error happend", error: error.message })
   }
}

// it is not finish yet
exports.resetPassword = async (req, res) => {

    const user = await userModel.findOne({
        username: req.body.username
    })
    if (user === null) {
        res.status(400).json({ message: "unser does not exist" })
    }
    try {
        const checkPasswordReset = await userModel.findOne({ email: req.body.email })
        if (checkPasswordReset) {
            const newPass = await bcrypt.hash(req.body.password, 10);
            const newPassword = await userModel.findByIdAndUpdate(req.body.id, { hash: newPass }, { new: true })
            res.status(200).json({ message: "password is successfully reset", newpassword: newPassword })
        }
    } catch (error) {
        res.status(400).json({ message: "error happend", error: error.message })
    }
}


// make favorite list 
exports.addToFavorites = async (req, res) => {
    try {
        const user = await userModel.findByIdAndUpdate(req.user._id, {
            $push: { favorite: req.params.article_id }
        },
            { new: true });

        return res.status(200).json({ message: "Article is in favorite list", user: user });

    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message });
    }
}

// get the favorite list
exports.favoritesList = async (req, res) => {
    try {

        const user = await userModel.findById(req.user._id).populate({path: 'favorite', populate : { path: "user_id"}});


        return res.status(200).json({ message: "Favorites list", favorite: user.favorite});

    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message });
    }
}


// new from saif multer to add the user image
const multerConfig = multer.diskStorage({

    destination: (req, file, callback) => {
        callback(null, 'uploads/userimages/');
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `image-${Date.now()}.${ext}`);
    },
});

const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true)
    } else {
        callback(new Error('Only Image is Allowed..'));
    }
}

const upload = multer({
    storage: multerConfig,
    fileFilter: isImage,
});

exports.uploadImage = upload.single('photo');
exports.upload = async (req, res) => {
    res.status(200).json({success: 'Success', image: req.file.filename});
}

exports.getImage = async (req, res) => {

    try {
        const user = await userModel.findById(req.params.id);

        console.log(user)

        res.sendFile(`${__dirname}/uploads/userimages/${user.userimage}`);
    } catch (error) {
        console.log(error)
    }
}


exports.userArticle = async (req, res) => {

    try {

        const article = await articleModel.find({user_id: req.params.id}).populate('user_id');

        return res.status(200).json({success: 'user list article', article : article})

    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message });
    }
}

exports.userSingleArticle = async (req, res) => {

    try {

        const article = await articleModel.findById(req.params.articleId);

        return res.status(200).json({success: 'user single article', article : article})

    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message });
    }
}

exports.removeFromFavorite = async (req, res) => {

    try {
        const user = await userModel.findByIdAndUpdate(req.user._id,            
            { $pull: { favorite: {$in: [`${req.params.id}`]}} },
            { new: true });

        res.status(200).json({message: 'Article removed from favorites successfully', article: user})
    } catch (error) {
        return res.status(400).json({ message: "error happend", error: error.message });
    }
}

// exports.makeOffer = async (req, res) => {
//     try {

//         const user = await userModel.findById(req.params.id);

//         const article = await articleModel.findByIdAndUpdate(req.body.article, {
//             $push: { user: req.params.article_id }
//         })
//     } catch (error) {
        
//     }
// }


// forget password 





exports.getPassword = async (req, res) => {

    res.send('hello world')
}

exports.postPassword= async (req, res) => {   

        const {email} = req.body;
       
        
        if (email !== user.email) {

            res-send('user not registered')
            return;
        }
    
        
}


