const mysql = require('promise-mysql')
mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'plb_db'
})

function getConnection() {
  return connection
}
module.exports = {getConnection}