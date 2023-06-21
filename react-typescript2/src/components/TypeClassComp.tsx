import React, { Component } from 'react'

interface CounterProps {
    startNumber: number;
}

export default class TypeClassComp
        extends Component<CounterProps> {

  render() {
    return (
      <div>
        <h3>TypeClassComp</h3>
        <p>{this.props.startNumber}</p>
      </div>
    )
  }
}
