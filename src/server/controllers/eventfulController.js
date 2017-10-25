const model = require('../models/eventful')
// const Obstruct = require('obstruction')

function remDash(str) {
    return str.replace(/-/g,'')
}

// TODO: Find how to iterate over an array using obstruction and 
function getData(req, res) {
    model({ date: `${remDash(req.query.start)}00-${remDash(req.query.end)}00`})
    .then(data => JSON.parse(data))
    .then((data) => {
        let newEv = data.events.event.map(event => ({
            title: event.title,
            url: event.url,
            start: event.start_time,
            color: 'green'
        }))
        return newEv
    })
    .then((data) => {
        // console.log(events)
        res.status(200).send(data)
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = getData;