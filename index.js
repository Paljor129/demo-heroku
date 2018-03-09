require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { makeExecutableSchema } = require('graphql-tools')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const cors = require('cors')
const path = require('path')


import schema from './server/schema'
import resolvers from './server/resolvers'
import { Person } from'./server/model'

const app = express()


mongoose.connect(
    process.env.DATABASE_URL,
    err => {
        if(err) {
            return console.log(err);
        }
        console.log("mongoose OK")
    }
)


const execSchemas = makeExecutableSchema({
    typeDefs: schema,
    resolvers
})



app.use(
    '/graphql', bodyParser.json(), graphqlExpress({ schema:  execSchemas, context: { Person }}))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.use("/", express.static(path.join(__dirname, "front/build")))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'front/build/index.html'))
})
console.log('DIRNAME : ', __dirname)




app.listen(3001, () => console.log('apps running on port 3001'))