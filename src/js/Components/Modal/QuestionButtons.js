import React, { Component } from 'react'
import QuestionButtonsOptions from './QuestionButtonsOptions'
import QuestionButtonsFeedback from './QuestionButtonsFeedback'

export default class QuestionButtons extends Component {
  render() {
    const buttons = this.props.isAnswering ? (
      <QuestionButtonsFeedback
        isCorrect={true} />
    ) : (
      <QuestionButtonsOptions
        isAnswered={this.props.isAnswered} />
    );

    return (
      <footer className="modal-card-foot">
        <div className="is-flex is-fullwidth">
          {buttons}
        </div>
      </footer>
    );
  }
}
