const model = require('../models/ticketmaster')

const startHour = 'T00:00:00Z'
const endHour = 'T23:59:59Z'

function getData(req, res) {
    model({ startDateTime: req.query.startDateTime + startHour, endDateTime: req.query.endDateTime + endHour})
    // let p = Promise.resolve(Data({ startDateTime: req.query.startDateTime + startHour, endDateTime: req.query.endDateTime + endHour},res))
        // .then((err, data) => {
        // if (err) {
        //     res.status(500).send(err);
        // })
    // .then(res.status(200).send())
    // .on('finished', (data) => {
    //     console.log(data)
    // })
    .then((data) =>  {
        // console.log(data)
        res.status(200).send(data)
    })
    .catch((err) => {
        console.log(err)
    })
        // .pipe(res)
}

module.exports = getData;