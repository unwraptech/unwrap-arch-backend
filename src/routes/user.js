const express = require('express');
const router = express.Router();
var passport = require('passport');
var jwt = require('jsonwebtoken');

const controller = require('../controllers/index-controllers');
const middleware = require('../middlewares/index-middleware');

router.post('/signup',
    middleware.rules.validationsignup,
    controller.user.signUp
);
router.post('/authenticate',
    middleware.rules.validationlogin,
    controller.user.login
);
router.post('/test',
    // passport.authenticate('jwt', { session: false }),
    middleware.jwt.jwtauthentication,
    controller.user.test
);

module.exports = router;