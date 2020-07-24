// var JwtStrategy = require('passport-jwt').Strategy;
// var ExtractJwt = require('passport-jwt').ExtractJwt;
var configParams = require("../config/config");
var passport = require('passport')
// module.exports = function(passport){
//     let opts = {};
//     opts.secretOrKey = configParams.secret;
//     opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
//     console.log('opts' , opts.jwtFromRequest);
//     passport.use(new JwtStrategy(opts, function(jwt_payload, done){
//         console.log('in');
//         User.getUserById(jwt_payload.UserId, function(err, user){
//             if(err){
//                 return done(err, false);
//             }
//             if(user){
//                 return done(null, user);
//             }
//             else{
//                 return done(null, false);
//             }
//         });
//     }))
// }

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
opts.secretOrKey =  configParams.secret;
console.log(opts);
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.id}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            done(null, user);
        } else {
            done(null, false);
            // or you could create a new account
        }
    });
}));