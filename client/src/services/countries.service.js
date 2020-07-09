import http from "../http-common";

class CountriesDataService {
  getByName(name) {
    return http.get(`/countries/name`, {params: {name: name}});
  }
}

export default new CountriesDataService();