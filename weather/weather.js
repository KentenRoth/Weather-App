const request = require('request')
const API_KEYS = require('./../../../API_KEYS/API_KEYS')

const darkSky = API_KEYS.dark_sky_key

// Needs to take the lat and lng from mapquest to get the weather
// need to get more than just current weather and feels like

// current, feels like, summary, humidity, % chance of rain.
// get upcoming forcast daily summary and % chance of rain each day.

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/6a4ff104399321633b67f86e38ba966c/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot reach servers')
        } else if () {
            callback('')
        } else if () {
            callback(undefined, {

            })
        }
    })
}

module.exports.getWeather = getWeather