const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')

const router = new Router()

// read Players
router.get('/player', (req, res, next) => {
    Player.findAll()
      .then((player) => {
        res.status(200).send(player)
      })
      .catch(console.error)
})

// create Players
router.post('/player', (req, res, next) => {
  Player.create(req.body)
    .then((player) => {
      res.status(200).send(player)
    })
    .catch(next)
})

// read one Player
router.get('/player/:id', (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team] }) 
    .then((playerId) => {
      res.status(200).send(playerId)
    })
    .catch(next)
})

// delete Player
router.delete('/player/:id', (req, res, next) => {
  Player.destroy({where: {id: req.params.id}})
    .then(result => res.status(200).send(`${result} rows have been deleted successfully`))
    .catch(next)
  })

// update Player
router.put('/player/:id', (req, res, next) => {
  Player.findOne({where: {id: req.params.id}})
    .then(player => {
      if (player) {
        return player.update(req.body)
          .then(player => res.json(player))
      } else {
        return res.status(404).end()
      }
    })
    .catch(next)
})

module.exports = router