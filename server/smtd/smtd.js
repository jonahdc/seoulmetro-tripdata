var config = require('./config');
var http = require('http');
var request = require('request');
var parseString = require('xml2js').parseString;

var smtd = {};

smtd.version = '1.0.0';

var sampleFormData = {
  start: 4113,
  end: 4117,
  skind: 1,
  weektag: 1,
  stime: 215708,
  lang: 'e'
};

smtd.init = function() {
  return 'Initialized';
};

function buildRequestOptions(queryObj){
  var options = config.defaultOptions;
  options.qs = queryObj;

  return options;
}

function processRoute(queryObj, callback) {

  var options = buildRequestOptions(queryObj);

  request(options, function(error, response, body) {
    //Check for error
    if (error) {
      return console.log('Error:', error);
    }

    //Check for right status code
    if (response.statusCode !== 200) {
      return console.log('Invalid Status Code Returned:', response.statusCode);
    }

    parseString(body, function(error, result) {
      callback(result);
    });
  })
};

smtd.test = function(){
  processRoute(sampleFormData, function(data){
    console.log('this is the route' + data.route);
  })
};

module.exports = smtd;
