import React, { Component } from 'react'
import QuestionContent from './QuestionContent'
import QuestionButtons from './QuestionButtons'

export default class QuizQuestion extends Component {
  render() {
    return (
      <div className={`modal ${this.props.isActive}`}>
        <form>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Question #N</p>
              <button className="delete"></button>
            </header>

            <QuestionContent question={this.props.question} />

            <QuestionButtons
              isAnswering={false}
              isAnswered={this.props.question.answered} />
          </div>
        </form>
      </div>
    )
  }
}