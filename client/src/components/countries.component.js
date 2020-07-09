import React, { Component } from "react";
import CountriesDataService from "../services/countries.service";

export default class GetCountries extends Component {
  constructor(props) {
    super(props)

    this.onChangeSearchCountry = this.onChangeSearchCountry.bind(this)
    this.searchCountry = this.searchCountry.bind(this)
    this.setActiveCountry = this.setActiveCountry.bind(this)

    this.state = {
      searchCountry: '',
      countriesFound: [],
      currentIndex: -1,
      currentCountry: '',
    }
  }

  onChangeSearchCountry(e) {
    const searchCountry = e.target.value;
    this.setState({ searchCountry: searchCountry })
  }
  searchCountry() {
    CountriesDataService.getByName(this.state.searchCountry)
      .then(response => this.setState({ countriesFound: response.data }))
  }
  setActiveCountry(country, index) {
    this.setState({
      currentCountry: country,
      currentIndex: index
    });
  }

  render() {
    const { searchCountry, countriesFound, currentIndex, currentCountry } = this.state
    return (
      <div className="list row">
        <div className="col-md-8">
          <h4>Find countries you wish</h4>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by title"
              value={searchCountry}
              onChange={this.onChangeSearchCountry}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchCountry}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            {countriesFound &&
              countriesFound.map((country, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveCountry(country, index)}
                  key={index}
                >
                  {country.name}
                </li>
              ))}
          </ul>
        </div>
        <div className="col-md-6 my-5">
          {currentCountry ? (
            <div>
              <h4>Country</h4>
              <div>
                <label>
                  <strong>Subregion:</strong>
                </label>{" "}
                {currentCountry.subregion}
              </div>
              <div>
                <label>
                  <strong>Capital:</strong>
                </label>{" "}
                {currentCountry.capital}
              </div>
              <div>
                <label>
                  <strong>Population:</strong>
                </label>{" "}
                {currentCountry.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              </div>
              <div>
                <img src={currentCountry.flag} width="500" />
              </div>
            </div>
          ) : (
              <div>
                <br />
                <p>Please find and select a country...</p>
              </div>
            )}
        </div>
        <span />
      </div>
    );
  }
}