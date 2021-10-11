const passportJWT = require('passport-jwt');
const userModel = require('./models/userModel');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;


function authenticate(passport) {

    passport.use('articleToken', new JWTStrategy({

        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET_KEY
    },
        function (jwtPayload, done) {
            return userModel.findById(jwtPayload.sub)
                .then(user => { return done(null, user) })
                .catch(err => { return done(err) })
        }
    ))
}

module.exports = authenticate;