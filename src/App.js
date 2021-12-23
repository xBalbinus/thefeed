// Setup env
require('dotenv').config()
const axios = require("axios"); // Requests
const dotenv = require("dotenv"); // Env vars
const fs = require("fs") ; // Filesystem
const logger = require("logger");

let BEARER = process.env.BEARER_TOKEN;

let twitterID = "1347196737501462530";

var config = {
  method: 'GET',
  url: 'https://api.twitter.com/2/users/' + twitterID + '/following?max_results=10',
  headers: { 
   'Authorization': 'Bearer ' + BEARER + '', 
   }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});


