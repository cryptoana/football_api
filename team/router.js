const { Router } = require('express')
const Team = require('./model')

const router = new Router()

// read teams
router.get('/team', (req, res, next) => {
    Team.findAll()
      .then((teams) => {
        res.status(200).send(teams)
      })
      .catch(console.error)
})

// create team
router.post('/team', (req, res, next) => {
  Team.create(req.body)
    .then((team) => {
      res.status(200).send(team)
    })
    .catch(next)
})

// read one team
router.get('/team/:id', (req, res, next) => {
  Team.findByPk(req.params.id) 
    .then((teamId) => {
      res.status(200).send(teamId)
    })
    .catch(next)
})

module.exports = router