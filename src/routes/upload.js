const express = require('express');
const router = express.Router();

const controller = require('../controllers/index-controllers');
const middleware = require('../middlewares/index-middleware');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
      callBack(null, './public/devices')
  },
  filename: (req, file, callBack) => {
      callBack(null, `${file.originalname}`)
  }
})
const uploads = multer({ storage: storage });
require('dotenv').config();
router.get('/search-mobile/:search',
    controller.upload.uploadpicture,
    uploads.single('file')
);

module.exports = router;