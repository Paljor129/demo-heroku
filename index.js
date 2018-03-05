const express = require('express')
const app = express()

//if there is anything after / then it will go to search in /front/build
app.use('/', express.static(__dirname + '/front/build'))

app.get('/', (req, res) => {
    //dirname is a root file 
    res.sendFile(__dirname + '/front/build/index.html')
})
console.log(__dirname);

//port if u find a port otherwise 3000
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Connected')
})