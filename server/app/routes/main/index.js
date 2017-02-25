'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Email = mongoose.model('Email');

// post a new email
router.post('/email', function (req, res, next) {
    Email.find({})
        .then(function(emails) {
            console.log('DATA: ', emails);
        });
        
    Email.create(req.body)
        .then(function(email) {
            res.send(email);
        })
        .catch(next);
});


// get all emails
router.get('/email', function (req, res, next) {
    Email.find({})
    .then(function(emails) {
        res.send(emails)
    })
    .catch(next);
});


