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
            console.log(JSON.stringify(results, undefined, 2))
        }
    })