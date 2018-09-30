const request = require('request')
const API_KEYS = require('./../../../API_KEYS/API_KEYS')

const darkSky = API_KEYS.dark_sky_key

// Needs to take the lat and lng from mapquest to get the weather
// need to get more than just current weather and feels like

// current, feels like, summary, humidity, % chance of rain.
// get upcoming forcast daily summary and % chance of rain each day.