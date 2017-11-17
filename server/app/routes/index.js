'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/members', require('./members'));
router.use('/main', require('./main'));
router.use('/currencies', require('./currencies'));
router.use('/hits', require('./hits'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
