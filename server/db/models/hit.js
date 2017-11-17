'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    page: {
        type: String,
    },
    time: {
    	type: Date,
    	default: Date.now
    }
});

mongoose.model('Hit', schema);