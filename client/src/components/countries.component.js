import React, { Component } from "react";
import CountriesDataService from "../services/countries.service";

export default class GetCountries extends Component {
  constructor(props) {
    super(props)

    this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this)
    this.searchTitle = this.searchTitle.bind(this)

    this.state = {
      searchCountry: '',
      countriesFound: [],
      currentIndex: -1,
    }
  }

  onChangeSearchTitle(e) {
    const searchCountry = e.target.value;
    this.setState({ searchCountry: searchCountry })
  }
  searchTitle() {
    CountriesDataService.getByName(this.state.searchCountry)
      .then(response => this.setState({countriesFound: response.data}))
  }

  render() {
    const { searchCountry, countriesFound, currentIndex } = this.state
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
              onChange={this.onChangeSearchTitle}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchTitle}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="list-group">
            {countriesFound &&
              countriesFound.map((tutorial, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => console.log(tutorial, index)}
                  key={index}
                >
                  {tutorial.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllTutorials}
          >
            Remove All
          </button>
        </div>
      </div>
    );
  }
}