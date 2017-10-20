// const dotenv = require('dotenv').config();
// const fetch = require('node-fetch');
const request = require('request');
const config = require ('../config.js');
const rp = require('request-promise');

module.exports = (req) => {
    return rp(`${config.ticketmasterApiUrl}&startDateTime=${req.startDateTime}&endDateTime=${req.endDateTime}`)
}