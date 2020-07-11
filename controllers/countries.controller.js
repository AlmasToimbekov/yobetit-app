const countriesApi = require('../services/countriesApi')

const getAll = (req, res) => {
  countriesApi.getAll()
    .then(result => res.send(result.data))
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while getting all countries.'
      })
    })
}

const getByFullName = (req, res) => {
  const name = req.query.name
  if (!name) {
    res.status(400).send({
      message: 'Provide a name parameter'
    })
  }

  countriesApi.getByFullName(name)
    .then(result => res.send(result.data))
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while getting by full name.'
      })
    })
}

const searchByName = (req, res) => {
  const name = req.query.name
  if (!name) {
    res.status(400).send({
      message: 'Provide a name parameter'
    })
  }

  countriesApi.searchByName(name)
    .then(result => res.send(result.data))
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while searching by name.'
      })
    })
}

module.exports = {
  getAll,
  getByFullName,
  searchByName,
}