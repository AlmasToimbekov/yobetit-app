import http from "../http-common";

const basePath = '/countries'
const getQuery = async (path, payload) => http.get(basePath + path, payload)

class CountriesDataService {
  getAll() {
    return getQuery('/getAll');
  }
  getByFullName(name) {
    return getQuery('/getByFullName', {params: {name: name}});
  }
  searchByName(name) {
    return getQuery('/searchByName', {params: {name: name}});
  }
}

export default new CountriesDataService();