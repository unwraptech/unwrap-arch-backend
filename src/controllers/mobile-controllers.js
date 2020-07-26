const con = require('../../database/db');

require('dotenv').config();
class MobileController {
    async getMobileBrandName(req, res) {
        const mobilenames_sql= "call getdevicesBrandsByDev_type(1)"
        con.query(mobilenames_sql, function (err, result) {
            if (err){
              res.status(400).json({error:'Some error occured please try again later'})
            }else {
              res.status(200).json({mobilebrands:result[0].map(data =>{return data.Brand})})
            }
            });
    }
    async searchmobile(req, res) {
        const searchmobile_SQL ="call search_device('"+req.params.search+"')"
        con.query(searchmobile_SQL, function (err, result) {
          if (err){
            res.status(400).json({error:'Some error occured please try again later'})
          }else {
            res.status(200).json({mobilebrands:result[0]})
          }
          });
    }
    async compareMobile(req, res) {
      console.log('in');
        const comparedevice ="call comparedevices("+req.body.id1+","+req.body.id2+","+req.body.id3  +  ","+req.body.id4+   ")"
        con.query(comparedevice, function (err, result) {
          if (err){
            res.status(400).json({error:'Some error occured please try again later'})
          }else {
            res.status(200).json({mobilebrands:result[0]})
          }
          });
    }
    async getMobileByBrand(req, res) {
        const searchmobile_SQL ="call get_devices_by_brand('"+req.params.brand+"')"
        con.query(searchmobile_SQL, function (err, result) {
          if (err){
            res.status(400).json({error:'Some error occured please try again later'})
          }else {
            res.status(200).json({mobilebrands:result[0]})
          }
          });
    }
    async getMobileDevices(req, res) {
        const searchmobile_SQL ="call getAllDevices('"+req.body.noofrecords+"','"+req.body.page+"','"+req.body.type+"','"+req.body.filter  +"')"
        console.log(searchmobile_SQL);
        con.query(searchmobile_SQL, function (err, result) {
            if (err){
              res.status(400).json({error:'Some error occured please try again later'})
            }else {
              res.status(200).json({devices:result[0]})
            }
            });
    }
}


module.exports = MobileController