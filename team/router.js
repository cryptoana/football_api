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

router.post('/team', (req, res, next) => {
  Team.create(req.body)
    .then((team) => {
      res.status(200).send(team)
    })
    .catch(next)
})

router.get('/team/:id', (req, res, next) => {
  Team.findByPk(req.params.id) 
    .then((teamId) => {
      res.status(200).send(teamId)
    })
    .catch(next)
})

// router.delete('/team/:id', (req, res, next) => {
//   Team.findAll(req.body)
    
//     .then((team) => {
//       res.status(200).send(team)
//     })
//     .catch(next)
// })

// app.delete('/users/:userId/tasks', (req, res, next) => {
//   Task.findAll({where: {userId: req.params.userId}})
//   .then(Tasks => Tasks.map((task) => 
//     task.destroy(req.body)
//   ))
//   .then(task => res.status(204).json(task))
//   .catch(next)
// })

module.exports = router