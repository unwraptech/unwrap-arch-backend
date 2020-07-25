// const Cryptr = require('cryptr');
const config = require('../config/config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const con = require('../../database/db');
const saltRounds = 10;

require('dotenv').config();
class UserController {
  async login(req, res) {
    try {
      var email = req.body.email;
      var password = req.body.password;
      const authenticate_sql = "call authenticate('" + email + "')"
      con.query(authenticate_sql, function (err, result) {
        if (result[0][0].message === "Invalid") {
          res.status(300).json({ message: "User doesnot Exists" })
        } else {
          let _result = result[0][0]
          let token = jwt.sign({ token: { email: _result.email, role: _result.role } }, config.secret, { expiresIn: 30000 });
          let refresh_token = jwt.sign({ token: { email: _result.email, role: _result.role } }, config.secret);
          bcrypt.compare(password, _result.password, function (err, result) {
            if (result) {
              res.status(200).json(
                {
                  data: {
                    email: _result.email,
                    token: token,
                    refresh_token: refresh_token,
                    role: _result.role
                  },
                  message: "User Login Successfully"
                })
            } else {
              res.status(300).json({ message: "Invalid User Credentials" })

            }
          });
        }
        console.log(config.secret);
      })
    }
    catch (error) {
      console.log('err', error);
      return res.send({ message: "Some error occured please try again later", error: error });
    }
  }
  async   signUp(req, res) {
    try {
      var email = req.body.email;
      var password = req.body.password;
      var name = req.body.name;
      // encrypting password -->
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
          const authenticate_sql = "call register_user('" + name + "','" + email + "','" + hash + "')"
          con.query(authenticate_sql, function (err, result) {
            if (err) {
              res.status(500).json({ error: 'Some error occured please try again later' })
            } else {
              res.status(200).json({ message: result[0][0].message })
            }
          });
        });
      });

    } catch (error) {
      console.log(error);
      return res.send({ message: "Some error occured please try again later", error: error });
    }
  }
  async getUsers(req, res) {
    try {
      const authenticate_sql ="call getUsers("+req.params.id+")"
      con.query(authenticate_sql, function (err, result) {
        if (err){
          res.status(400).json({error:'Some error occured please try again later'})
        }else {
          res.json({message:result[0]})
        }
        });
    } catch (error) {
      console.log(error);
      return res.send({ message: "Some error occured please try again later", error: error });
    }
  }
}


module.exports = UserController