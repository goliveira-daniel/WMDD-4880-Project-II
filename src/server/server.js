const config = require ('./config.js');
const request = require('request');
const express = require('express')
const app = express()
const router = require('./routes/router')
// const http = require('http')
// const proxy = require('express-http-proxy');

app.listen(config.port, function () {
    console.log(`App listening on port ${config.port}!`)
})

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/', router);

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