const { Router } = require('express')
const Team = require('./model')

const router = new Router()

router.get('/team', (req, res, next) => {
    Team.findAll()
      .then((teams) => {
        res.status(200).send(teams)
      })
      .catch(console.error)
})

module.exports = router