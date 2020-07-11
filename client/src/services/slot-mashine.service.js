import http from "../http-common";

class CountriesDataService {
  makeSpin(coins) {
    return http.get('slots/makeSpin', {params: {coins}});
  }
}

export default new CountriesDataService();