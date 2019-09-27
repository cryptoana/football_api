const { Router } = require('express')
const Player = require('./model')
const Team = require('../team/model')

const router = new Router()

router.get('/player', (req, res, next) => {
    Player.findAll()
      .then((player) => {
        res.status(200).send(player)
      })
      .catch(console.error)
})

router.post('/player', (req, res, next) => {
  Player.create(req.body)
    .then((player) => {
      res.status(200).send(player)
    })
    .catch(next)
})

router.get('/player/:id', (req, res, next) => {
  Player.findByPk(req.params.id, { include: [Team] }) 
    .then((playerId) => {
      res.status(200).send(playerId)
    })
    .catch(next)
})

// router.delete('/player/:id', (req, res, next) => {
//   Player.findOne({where: {playerId: req.params.Id}})
//     .then(Players => Players.map((player) => 
//       player.destroy(req.body)
//     ))
//     .then(player => res.status(200).send(playerId))
//     .catch(next)
//   })

module.exports = router