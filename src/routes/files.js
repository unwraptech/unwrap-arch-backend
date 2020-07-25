const express = require('express');
const router = express.Router();

const controller = require('../controllers/index-controllers');
const middleware = require('../middlewares/index-middleware');

router.get('/add-devices/fono/android/:name',
    controller.file.adddevices
);
router.get('/add-devices/fonol/android/:name',
    controller.file.addfonoapi
);
router.post('/add-news',
    // passport.authenticate('jwt', { session: false }),
    controller.file.addNews
);
router.get('/get-news',
    controller.file.getNews
);


module.exports = router;