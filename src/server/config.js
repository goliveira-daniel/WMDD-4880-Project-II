// const dotenv = require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    ticketmasterApiUrl: 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=GS6WU1hghewo5mdMyZRwrRcUij0sezCS',
    eventful: {
        ApiKey: process.env.EVENTFULAPIKEY || 'n8j4Qpdz3QnV25gd',
        ApiUrl: 'http://api.eventful.com/json/events/search?app_key=n8j4Qpdz3QnV25gd' 
    }
};

module.exports = config;