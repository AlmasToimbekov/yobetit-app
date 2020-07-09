const countriesApi = require('../services/countriesApi')

exports.getByName = (req, res) => {
  const name = req.query.name
  console.log(req.query, req.body)
  if (!name) {
      res.status(400).send({
          message: 'Provide a name parameter'
      })
  }

  countriesApi.getByName(name)
    .then(result => res.send(result.data))
    .catch(err => {
      res.status(500).send({
          message: err.message || 'Some error occured while creating the Tutorial.'
      })
    })
}