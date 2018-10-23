const yargs = require('yargs')

const mapquest = require('./geocode/geocode')
const weather = require('./weather/weather')


const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to find weather',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv

    // This file should only obtain the information and display it into the terminal

    mapquest.mapquestAddress(argv.address, (errorMessage, results) => {
        if (errorMessage) {
            console.log(errorMessage)
        } else {
            console.log(results.lat, results.lng)
            weather.getWeather(results.lat, results.lng, (errorMessage, weatherResults) => {
                if (errorMessage) {
                    console.log(errorMessage)
                } else {
                    console.log(`Today is ${weatherResults.summary}`)
                    console.log(`With a temperature of ${weatherResults.temp} that feels like ${weatherResults.feels}`)
                    console.log(`The humidity level is ${weatherResults.humidity}`)
                    console.log(weatherResults.forcast)
                    if (weatherResults.precip === 0) {
                        console.log('There is currently a 0% chance of precipitation')
                    } else {
                        console.log(`There is a ${weatherResults.precip}% chance of ${weatherResults.precipType}`)
                    }
                    console.log('The Upcoming forcast looks like this')
                        for (i = 1; i < 8; i++) {
                            console.log(weatherResults.forcast[i])
                    }
                

                    
                }
            })
        }
    })







