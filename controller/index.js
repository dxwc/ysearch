let router = require('express').Router();

router.use(require('./home.js'));
router.use(require('./watch.js'));
router.use(require('./comments.js'));
router.use(require('./vid_info.js'));
router.use(require('./404.js')); // last route

module.exports = router;