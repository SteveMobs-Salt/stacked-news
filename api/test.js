// import { NowRequest, NowResponse } from '@vercel/node';

module.exports = (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: process.env.TEST_NAME }))
}
