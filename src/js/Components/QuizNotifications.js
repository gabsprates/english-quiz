import React, { Component } from 'react'

export default class QuizNotifications extends Component {
  render() {
    return (
      <div className="container">
        <div className={`notification is-${this.props.type}`}>
          <button className="delete"></button>
          Danger lorem ipsum dolor sit amet
        </div>
      </div>
    )
  }
}
