const express = require('express')
const cont = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} =process.env


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
}).then(dbInstance => {
    console.log('DB Connected')
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`app is listening on port: ${SERVER_PORT}`))
})
