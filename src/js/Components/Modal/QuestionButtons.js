import React, { Component } from 'react'
import QuestionButtonsOptions from './QuestionButtonsOptions'
import QuestionButtonsFeedback from './QuestionButtonsFeedback'

export default class QuestionButtons extends Component {
  render() {
    const buttons = this.props.isAnswering ? (
      <QuestionButtonsFeedback
        closeModal={ this.props.closeModal }
        isCorrect={ this.props.isAnswering.correct } />
    ) : (
      <QuestionButtonsOptions
        closeModal={ this.props.closeModal }
        isAnswered={ this.props.isAnswered } />
    );

    return (
      <footer className="modal-card-foot">
        <div className="is-flex is-fullwidth action-buttons">
          {buttons}
        </div>
      </footer>
    );
  }
}
