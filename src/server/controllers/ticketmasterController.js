const model = require('../models/ticketmaster')

const startHour = 'T00:00:00Z'
const endHour = 'T23:59:59Z'

// TODO: Find how to iterate over an array using obstruction and 
function getData(req, res) {
    model({ startDateTime: req.query.startDateTime + startHour, endDateTime: req.query.endDateTime + endHour})
    .then(data => JSON.parse(data))
    .then((data) =>  {
        let events = data._embedded.events.map(event => ({
            title: event.name,
            url: event.url,
            start: event.dates.start.localDate,
            classification: event.classifications[0].segment.name,
            // imageUrl: event.images.map(images => {
            //     if (images.ratio == "3_2") {
            //         return images.url
            //     }
            imageUrl: event.images[0].url
            // })
        }))
        return events
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