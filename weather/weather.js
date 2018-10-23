const request = require('request')
const API_KEYS = require('./../../../API_KEYS/API_KEYS')

const darkSky = API_KEYS.dark_sky_key


// get upcoming forcast daily summary and % chance of rain each day.



const getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/${darkSky}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot reach servers')
        } else if (body.code === 400) {
            callback('Invalid Address')
        } else if (response.statusCode === 200) {
            callback(undefined , {
                summary: body.currently.summary,
                temp: body.currently.temperature,
                feels: body.currently.apparentTemperature,
                humidity: body.currently.humidity,
                precip: body.currently.precipProbability,
                precipType: body.currently.precipType,
            })
        }
    })
}

module.exports.getWeather = getWeather
