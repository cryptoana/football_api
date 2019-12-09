const express = require('express')
// const db = require('./db')
// const Team = require('./team/model')
const teamRouter = require('./team/router')
const playerRouter = require('./players/router')
const bodyParser = require('body-parser')

const app = express()

const port = process.env.PORT || 4002

const jsonParser = bodyParser.json()

app.use(jsonParser)
app.use(teamRouter)
app.use(playerRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port} `)
},
  { tableName: 'football_teams' }
)