'use strict';
var crypto = require('crypto');
var mongoose = require('mongoose');
var _ = require('lodash');

var schema = new mongoose.Schema({
    emailAddress: {
        type: String,
        unique: true
    }
});

mongoose.model('Email', schema);
