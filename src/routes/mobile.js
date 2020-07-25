const express = require('express');
const router = express.Router();

const controller = require('../controllers/index-controllers');
const middleware = require('../middlewares/index-middleware');

router.get('/get-mobile-brandName',
    controller.mobile.getMobileBrandName
);
router.get('/search-mobile/:search',
    controller.mobile.searchmobile
);
router.post('/compare-mobile',
    // passport.authenticate('jwt', { session: false }),
    controller.mobile.compareMobile
);
router.get('/get-mobile-by-brand/:brand',
    // passport.authenticate('jwt', { session: false }),
    controller.mobile.getMobileByBrand
);
router.post('/get-mobile-devices',
    // passport.authenticate('jwt', { session: false }),
    controller.mobile.getMobileDevices
);
module.exports = router;