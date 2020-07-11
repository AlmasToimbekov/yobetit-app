const slotMashineApi = require('../services/slotMashineApi')

const makeSpin = (req, res) => {
  const coins = req.query.coins
  if (!coins) {
    res.status(400).send({
      message: 'Provide a coins parameter'
    })
  }
  if (coins <= 0) res.status(400).send({message: 'No coins for spin it'})

  slotMashineApi.makeSpin(coins)
    .then(result => res.send(result))
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occured while making a spin.'
      })
    })
}

module.exports = {
  makeSpin,
}