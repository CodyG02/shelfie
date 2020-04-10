const express = require('express')
const ProductCtrl = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} =process.env

app.get('/api/inventory', ProductCtrl.getProducts)
app.post('/api/product', ProductCtrl.addProduct)
app.put('/api/product/:id', ProductCtrl.updateProduct)
app.delete('/api/product/:id', ProductCtrl.deleteProduct)

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
