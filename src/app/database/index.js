const pg = require('pg')

const { Client } = pg

const db = new Client({
  user: 'root',
  password: 'root',
  host: 'localhost',
  port: 5432,
  database: 'mycontacts'
})

db.connect()

exports.query = async (exp, values) => {
  const rows = await db.query(exp, values)
  console.log(rows)
  return rows
}
