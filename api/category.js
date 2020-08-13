// import { NowRequest, NowResponse } from '@vercel/node';
import fetch from 'node-fetch';

module.exports = (req, res) => {
  const {category} = req.query;
  fetch(`https://content.guardianapis.com/${category}?api-key=${process.env.REACT_APP_API_KEY}&show-fields=all`).then(resp => resp.json())
  .then( data => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  })
  .catch(err => res.send(err))
  
}