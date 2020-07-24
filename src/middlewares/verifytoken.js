const jwt = require("jsonwebtoken");
const config = require("../config/config");
// const helpers = require("../helpers/index");
// const Cryptr = require("cryptr");
// const models = require('../models/index');

module.exports = async (req, res, next) => {
  try {
    let origUrl = req.originalUrl;
    let lastUrl = origUrl.split("/").pop();
    let Authorization;
    let AdvancedAuthorization;
    if (lastUrl === "resetPassword") {
      Authorization = req.header("Authorization");
      var userRow = await helpers.common.getUserByEmailAuthToken({
        where: { forgot_pwd_token: req.header("Authorization") }
      });
      if (userRow) {
        AdvancedAuthorization = userRow.encrypt_decrypt_word;
      } else {
        return res
          .status(401)
          .send({ message: helpers.cConst.verifyTokens.invalidToken });
      }
    } else {
      Authorization = req.header("Authorization");
      AdvancedAuthorization = req.header("AdvancedAuthorization");
    }

    const cryptr = new Cryptr(AdvancedAuthorization);
    var token = cryptr.decrypt(Authorization);

    jwt.verify(token, config.secret, async function (err, decoded) {
      if (err) {
        return res
          .status(401)
          .send({ message: helpers.msgs.verifyTokens.invalidToken });
      } else {
        req.userInfo = decoded;
        let row = await models.users.findByPk(req.userInfo.userId);
        if (row.email_status === "UNVERIFIED") {
          return res
            .status(401)
            .send({ message: helpers.msgs.verifyTokens.emailNotVerified });
        } else if (row.account_status === "DEACTIVATE") {
          return res
            .status(401)
            .send({ message: helpers.msgs.verifyTokens.deactivateAccount });
        } else {
          next();
        }
      }
    });
  } catch (err) {

    res
      .status(401)
      .send({ message: helpers.msgs.verifyTokens.invalidToken });
  }
}