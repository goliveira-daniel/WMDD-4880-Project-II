const model = require('../models/eventful')
const Obstruct = require('obstruction')

const startHour = 'T00:00:00Z'
const endHour = 'T23:59:59Z'

// TODO: Find how to iterate over an array using obstruction and 
function getData(req, res) {
    model({ date: 'this+week'})
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
    // .then((data) =>  {
    //     let events = 
    //     Obstruct({
    //         events: 
    //         Obstruct.array({
    //             title: true,
    //             start: 'start_time',
    //             url: true
    //             // classification: 'classifications[0].segment.name'
    //         })
    //     },data.events)
    //     return events.events
    // })
    .then((data) => {
        // console.log(events)
        res.status(200).send(data)
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = getData;