const axios = require('axios')

//  Base HTTP
const $baseHTTP = axios.create({
  baseURL: 'https://restcountries.eu/rest/v2',
  headers: {
    Accept: 'application/hal+json, application/json; q=0.5',
  },
})

const api = {
  getAll() {
    return $baseHTTP.get('/all')
  },
  getByFullName(name) {
    return $baseHTTP.get(`/name/${name}?fullText=true`)
      .catch(err => {
        if (err.response && err.response.status === 404) return {data: []}
        throw Error(err)
      })
  },
  searchByName(name) {
    return $baseHTTP.get(`/name/${name}`)
  }
}

module.exports = api