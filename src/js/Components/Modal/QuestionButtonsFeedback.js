import React, { Component } from 'react'

export default class QuestionButtonsOptions extends Component {
  render() {
    return (
      this.props.isCorrect ? (
        <button type="button" className="button is-fullwidth is-success">
          YEEEEEEEEEEES!!!! &#9787;
        </button>
      ) : (
        <button type="button" className="button is-fullwidth is-danger">
          OOH NOOOOO!!!! &#9785;
        </button>
      )
    );
  }
}
