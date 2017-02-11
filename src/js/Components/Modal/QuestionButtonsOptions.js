import React, { Component } from 'react'

export default class QuestionButtonsOptions extends Component {
  render() {
    return (
      this.props.isAnswered ? (
        <button type="button" className="button is-fullwidth is-warning">
          Already responded
        </button>
      ) : (
        <div className="is-flex is-fullwidth">
          <button type="submit" className="button is-fullwidth is-info">
            Respond
          </button>
          <button type="button" className="button is-fullwidth is-ligth">
            Give up
          </button>
        </div>
      )
    );
  }
}
