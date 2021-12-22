const axios = require("axios"); // Requests
const dotenv = require("dotenv"); // Env vars
const fs = require("fs") ; // Filesystem

// Setup env
require('dotenv').config()

let CONSUMER_KEY = process.env.CONSUMER_KEY
let CONSUMER_SECRET = process.env.CONSUMER_SECRET
let ACCESS_TOKEN = process.env.ACCESS_TOKEN
let TOKEN_SECRET = process.env.TOKEN_SECRET

var config = {
  method: 'get',
  url: 'https://api.twitter.com/2/users/1347196737501462530/following?max_results=10',
  headers: { 
    'Authorization': 'OAuth oauth_consumer_key="ZA8gu0ooP8ZAnd0kCYzEyo37X",oauth_token="1347196737501462530-TdywlxRi6S5XE7RiLfHBs2d0AozdNU",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1640216063",oauth_nonce="ObggRgRBmbi",oauth_version="1.0",oauth_signature="Z3mBQkZfkepICw3kWzcNa9x%2Fj2k%3D"', 
    'Cookie': 'guest_id=v1%3A163604112176542839; guest_id_ads=v1%3A163604112176542839; guest_id_marketing=v1%3A163604112176542839; personalization_id="v1_9SdyyDTelDd3IUKGnPfKRw=="'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
