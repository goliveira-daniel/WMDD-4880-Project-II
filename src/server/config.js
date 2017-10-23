// const dotenv = require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    ticketmasterApiUrl: 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=GS6WU1hghewo5mdMyZRwrRcUij0sezCS'
};

module.exports = config;