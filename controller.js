'use strict';

var response = require('./res');
var connection = require('./config/connection');

exports.index = function(req,res){
    response.ok("running my Rest API", res)
};