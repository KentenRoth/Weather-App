const request = require('request')
const API_KEYS = require('./../../../API_KEYS/API_KEYS')

const mapquest_key = API_KEYS.mapquest_key


// Need to us input to find lat and lng of address
// Need to encode address so it can be read by the browser