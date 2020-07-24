const jwtAuth = require('./verifytoken');
const Validations = require('../validation-handler/user-validations');
const rules = new Validations();
const Authentication = require('../validation-handler/authentication');
const jwt = new Authentication();
module.exports = { jwtAuth, rules , jwt};