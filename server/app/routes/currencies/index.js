'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var CurrencyPrice = mongoose.model('CurrencyPrice');
var rp = require('request-promise');
var currenciesManager = require('./currenciesManager');

// post a new email
router.post('/', function (req, res, next) {
    currenciesManager.createAllCurrencyObjs()
    .then(currencyArr => {
        res.json(currencyArr);
    })
    .catch(next);
});

// get all currencyPrice objects
router.get('/', function (req, res, next) {
    CurrencyPrice.find({})
    .then(function(currencyPriceObj) {
        res.send(currencyPriceObj)
    })
    .catch(next);
});

// get all currencyPrice objects
router.delete('/', function (req, res, next) {
    CurrencyPrice.remove({})
    .then(response => {
        res.json(response);
    });
});


