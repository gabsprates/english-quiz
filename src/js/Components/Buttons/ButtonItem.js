import React, { Component } from 'react'

export default class ButtonItem extends Component {
  render() {
    return (
      <button
        type="button"
        className={`button button-item ${this.props.answered}`}>
        {this.props.num}
      </button>
    )
  }
}
