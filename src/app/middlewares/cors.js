module.exports = (_, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3001')
  res.setHeader('Access-Control-Allow-Methods', '*')
  // Cache current OPTIONS for preflight requests for X seconds
  res.setHeader('Access-Control-Max-Age', '15')
  next()
}
