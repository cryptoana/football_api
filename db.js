const Sequelize = require('sequelize')

// DB url created by Heroku
const databaseURL = process.env.DATABASE_URL || 'postgres://postgres:secret@localhost:5432/postgres'

const db = new Sequelize(databaseURL)

db
  .sync({ force: false })
  .then(() => console.log('DB updated'))
  .catch(console.error)

module.exports = db