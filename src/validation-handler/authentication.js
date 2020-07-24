const { Validator } = require('node-input-validator');
var jwt = require('jsonwebtoken');
const config = require('../config/config')

/** 
 * Middleware JWT class
 */

module.exports = class Authentication {
  async jwtauthentication(req, res, next) {
    let _token = req.headers.authorization;
    jwt.verify(_token, config.secret, function (err, decoded) {
      console.log(decoded) // bar
      if (decoded && config.secret) {
        next();
      } else {
        res.send({ message: 'Unauthorized' });
      }
    });
  }

}
