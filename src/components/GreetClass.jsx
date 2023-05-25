import React, { Component } from 'react'

export class GreetClass extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.label}</h1>
      </div>
    )
  }
}

export default GreetClass