import React, { Component } from "react"
import { Button } from 'react-bootstrap'
import SlotContainer from '../containers/slot.container'
import slotMashineService from '../services/slot-mashine.service'

export default class SlotMashine extends Component {
  constructor(props) {
    super(props)
    this.state = {
      credits: 20,
      slotDatum: ['X', 'X', 'X'],
    }
    this.makeSpin = this.makeSpin.bind(this)
  }

  makeSpin() {
    slotMashineService.makeSpin(this.state.credits)
      .then(response => this.setState({
        slotDatum: response.data.spinResult,
        credits: response.data.balance,
      }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to the Slot Mashine</h1>
        </header>
        <SlotContainer slotDatum={this.state.slotDatum} />
          <div>
            <Button onClick={this.makeSpin}>Make spin</Button>
          </div>
          <div className="my-2">
            <span>Your coins: {this.state.credits}</span>
          </div>
        </div>
    )
  }
}
