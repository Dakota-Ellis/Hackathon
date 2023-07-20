const express = require('express');
const app = express();
const port = 3001;
var cors = require('cors');
const knex = require('knex')(require('./knexfile.js')["development"]);

app.use(cors())


app.get('/', (req, res) => res.send('Working!'))

app.get('/person', cors(), (req, res) => {
    knex('person')
    .select('*')
    .then(result => {
        var persons = result.map(indv => indv)
        res.json(persons)
    })
})


app.listen(port, () => console.log(`Listening on port ${port}`))

