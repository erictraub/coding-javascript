'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Hit = mongoose.model('Hit');

// post a new email
router.post('/', (req, res, next) => {
    Hit.create(req.body)
    .then(hit => {
        res.send(hit);
    })
    .catch(next);
});

// get all currencyPrice objects
router.get('/', (req, res, next) => {
    Hit.find({})
    .then(function(hits) {
        res.send(hits)
    })
    .catch(next);
});

router.get('/by-date', (req, res, next) => {
    Hit.find({})
    .then(hits => {
        var hitsObj = {};

        hits.forEach(hit => {
            const date = hit.time.toString().substring(0,10);
            if (!hitsObj[date]) {
                hitsObj[date] = {};
                hitsObj[date][hit.page] = 0;
            }
            if (!hitsObj[date][hit.page]) hitsObj[date][hit.page] = 0;
            hitsObj[date][hit.page]++;
        });

        res.send(hitsObj);
    })
    .catch(next);
});



