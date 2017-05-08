import React, { Component } from 'react'
import QuestionContent from './QuestionContent'
import QuestionButtons from './QuestionButtons'

export default class QuizQuestion extends Component {
  render() {
    return (
      <div className="modal is-active">
        <form onSubmit={ (e) => {
            this.props.submitAnswer(e, this.props.question);
          } }>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                Question #{ this.props.question.number }
              </p>
              <button className="delete" type="button"
                onClick={ () => this.props.closeModal(false) }>
              </button>
            </header>

            <QuestionContent question={ this.props.question } />

            <QuestionButtons
              closeModal={ this.props.closeModal }
              isAnswering={ this.props.question.isAnswering }
              isAnswered={ this.props.question.answered } />
          </div>
        </form>
      </div>
    )
  }
}
