module.exports = (_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
  next()
}
