// const dotenv = require('dotenv').config();
// const fetch = require('node-fetch');
const config = require ('../config.js');
const _ = require('lodash');
const request = require('request');
const rp = require('request-promise');

const queryParams = {
    city: 'vancouver', // limits the city only to Vancouver for test purposes
    size: 100 //tries to fetch as much events as possible
}

function buildUrlStr(clientParams) {
    let urlStr = `${config.ticketmasterApiUrl}`
    if (typeof clientParams == 'object') _.merge(queryParams,clientParams) 
    Object.keys(queryParams).forEach(key => {
        urlStr += '&' + key + '=' + queryParams[key] 
    });
    return urlStr
}

module.exports = (req) => {
    // let test = buildUrlStr(req);
    // return rp(`${config.ticketmasterApiUrl}&startDateTime=${req.startDateTime}&endDateTime=${req.endDateTime}&city=vancouver`)
    return rp(buildUrlStr(req))
}