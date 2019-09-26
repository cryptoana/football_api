const express = require('express')
// const db = require('./db')
// const Team = require('./team/model')
const teamRouter = require('./team/router')

const app = express()

const port = process.env.PORT || 4002

app.use(teamRouter)

app.listen(port, () => {
  console.log(`Listening on port ${port} `)
},
  { tableName: 'football_teams' }
)
