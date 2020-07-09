const axios = require('axios')

//  Base HTTP
const $baseHTTP = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  headers: {
    Accept: 'application/hal+json, application/json; q=0.5',
  },
})

const api = {
  getByName(name) {
    return $baseHTTP.get(`/name/${name}`)
  }
}

module.exports = api