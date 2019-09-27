const Sequelize = require('sequelize')
const Team = require('../team/model')

const db = require('../db')

const Player = db.define(
  'player', {
    name: Sequelize.STRING,
    // field: 'team_name'
    number: Sequelize.INTEGER
  }
)

Player.belongsTo(Team)

module.exports = Player