// const ticketmaster = require ('./ticketmaster.js')
const http = require('http')
const fetch = require('node-fetch');
const request = require('request');
const proxy = require('express-http-proxy');

/*http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.statusCode = 200
    if (req.url === '/ticketmaster') {
        res.writeHead(200, {
            // 'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
        });
        fetch(ticketmaster2())
            .then(res => res.json())
            .then(data => {
                // console.log(ticketmaster2())
                res.end(ticketmaster2())
            })
        // console.log(JSON.stringify(ticketmaster()))
    } else if (req.url === '/eventful') {
        res.end(JSON.stringify(finn))
    } else {
        res.statusCode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.write('nothing to see here\n\n')
        res.end('try "/ticketmaster" or "/eventful"')
    }
}).listen(5000)*/

function ticketmaster2 () {
    const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=GS6WU1hghewo5mdMyZRwrRcUij0sezCS`
	fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            // console.log (data)
            return data
        })
}

const express = require('express')
const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/ticketmaster', function (req, res, next) {
    // res.send(
        // request('https://app.ticketmaster.com/discovery/v2/events.json?apikey=GS6WU1hghewo5mdMyZRwrRcUij0sezCS', function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        // // console.log('body:', body); // Print the HTML for the Google homepage.
        // res.send(body)
        request('https://app.ticketmaster.com/discovery/v2/events.json?apikey=GS6WU1hghewo5mdMyZRwrRcUij0sezCS').pipe(res)
// })
    // }))
})

app.get('/ticketmaster', proxy('https://app.ticketmaster.com/discovery/v2/events.json?apikey=GS6WU1hghewo5mdMyZRwrRcUij0sezCS'))

app.listen(5000, function () {
    console.log('App listening on port 5000!')
})

//     // const apiUrl = ``
//     request('https://app.ticketmaster.com/discovery/v2/events.json?apikey=GS6WU1hghewo5mdMyZRwrRcUij0sezCS', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });