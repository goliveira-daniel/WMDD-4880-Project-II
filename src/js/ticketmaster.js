const dotenv = require('dotenv').config();
const fetch = require('node-fetch');

var params = {}

params.city = 'vancouver'

// const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${process.env.TICKETMASTER_APIKEY}`
const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=GS6WU1hghewo5mdMyZRwrRcUij0sezCS`

module.exports = function () {
	fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            // console.log (data)
            return data
        })
}
// exports = fetchData

// module.exports = fetchData;