import React, { Component } from 'react'

export class StateClass extends Component {

    constructor(props) {
      super(props)
      this.state = {
        count: 0
    }
    }

    handleIncrement() {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecrement() {
        this.setState({
            count: this.state.count - 1
        })
    }

    handleIncrementByFive() {
        this.setState({
            count: this.state.count + 5
        })
    }

    handleDecrementByFive() {
        this.setState({
            count: this.state.count - 5
        })
    }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.handleIncrement()}>Increment</button><br /><br />
        <button onClick={() => this.handleDecrement()}>Decrement</button><br /><br />
        <button onClick={() => this.handleIncrementByFive()}>Increment By 5</button><br /><br />
        <button onClick={() => this.handleDecrementByFive()}>Decrement By 5</button><br /><br />

      </div>
    )
  }
}

export default StateClass