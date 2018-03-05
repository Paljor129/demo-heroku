const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World')
})

//port if u find a port otherwise 3000
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Connected')
})