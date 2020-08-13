import fetch from 'node-fetch';

module.exports = (req, res) => {
  const {query} = req.query;
  fetch(`https://content.guardianapis.com/search?q=${query}&api-key=${process.env.REACT_APP_API_KEY}&show-fields=all`).then(resp => resp.json())
  .then( data => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(data))
  })
  .catch(err => { 
    res.send(err);
    throw Error(err); })
  
}
