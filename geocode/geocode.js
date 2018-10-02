const request = require('request')
const API_KEYS = require('./../../../API_KEYS/API_KEYS')

const mapquest_key = API_KEYS.mapquest_key


// Need to us input to find lat and lng of address
// Need to encode address so it can be read by the browser

const mapquestAddress = (address, callback) => {
    const encodedAddress = encodeURIComponent(address)

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${mapquest_key}&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Cannot connect to Mapquest.')
        } else if (body.info.statuscode === 400) {
            callback('Cannot find that address.')
        } else if (body.info.statuscode === 0) {
            callback(undefined, {
                lat: body.results[0].locations[0].latLng.lat ,
                lng: body.results[0].locations[0].latLng.lng
            })
        }
    })
}




module.exports.mapquestAddress = mapquestAddress