const jwt = require('jsonwebtoken');


// function to generate Token to use in user login page
exports.generateToken = (user) => {

    return jwt.sign({
        sub: user._id,
    }, process.env.SECRET_KEY,{expiresIn: "1h"})
}