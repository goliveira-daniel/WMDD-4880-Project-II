const model = require('../models/ticketmaster')
const Obstruct = require('obstruction')

const startHour = 'T00:00:00Z'
const endHour = 'T23:59:59Z'

function getData(req, res) {
    model({ startDateTime: req.query.startDateTime + startHour, endDateTime: req.query.endDateTime + endHour})
    .then(data => JSON.parse(data))
    .then((data) =>  {
        let events = 
        Obstruct({
            events: 
            Obstruct.array({
                title: 'name',
                start: 'dates.start.localDate',
                url: true
            })
        },data._embedded)
        return events.events
    })
    .then((events) => {
        // console.log(events)
        res.status(200).send(events)
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports = getData;