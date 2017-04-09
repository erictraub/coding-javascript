'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    ticker: {
        type: String
    },
    lowestAsk: {
        type: String
    },
    highestBid: {
        type: String
    },
    time: {
        type: Date,
        default: Date.now
    },
    percentChange: {
        type: Number
    },
    quoteVolume: {
        type: Number
    },
    baseVolume: {
        type: Number
    },
    batch: {
        type: String
    }
});

mongoose.model('CurrencyPrice', schema);



