const yargs = require('yargs')

const geocode = require('./geocode/geocode')
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