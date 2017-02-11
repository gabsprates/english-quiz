import React, { Component } from 'react'

export default class Alternative extends Component {
  render() {
    return (
      <div className="alternatives">
        <div className="control alternative">
          <label className="label">
            <input type="radio" name="answer" value={this.props.index} />
            <span className="fa"></span>
            {this.props.text}
          </label>
        </div>
      </div>
    )
  }
}
