import React, { Component } from "react";
import CountriesDataService from "../services/countries.service";
import { ButtonGroup, Button } from 'react-bootstrap';

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

  clearState = () => this.setState({
    countriesFound: [],
    currentIndex: -1,
    currentCountry: '',
  })

  onChangeSearchCountry(e) {
    const searchCountry = e.target.value;
    this.setState({ searchCountry: searchCountry })
  }
  searchCountry(mode) {
    this.clearState()
    switch (mode) {
      case 'getOne':
        CountriesDataService.getByFullName(this.state.searchCountry)
          .then(response => this.setState({ countriesFound: response.data }))
          break
      case 'search':
        CountriesDataService.searchByName(this.state.searchCountry)
          .then(response => this.setState({ countriesFound: response.data }))
          break
      case 'getAll':
        CountriesDataService.getAll()
          .then(response => this.setState({ countriesFound: response.data }))
          break
      default:
        break
    }
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
          </div>
          <ButtonGroup className="mb-2" aria-label="Basic example">
            <Button
              variant="secondary"
              onClick={() => this.searchCountry('getOne')}
            >
              Get country
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.searchCountry('search')}
            >
              Search by name
            </Button>
            <Button
              variant="secondary"
              onClick={() => this.searchCountry('getAll')}
            >
              Get all countries
            </Button>
          </ButtonGroup>
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