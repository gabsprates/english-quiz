import React, { Component } from 'react'
import QuestionContent from './QuestionContent'
import QuestionButtons from './QuestionButtons'

export default function QuizQuestion(props) {
  return (
    <div className="modal is-active">
      <form onSubmit={ (e) => {
          props.submitAnswer(e, props.question);
        } }>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">
              Question #{ props.question.number }
            </p>
            <button className="delete" type="button"
              onClick={ () => props.closeModal(false) }>
            </button>
          </header>

          <QuestionContent question={ props.question } />

          <QuestionButtons
            closeModal={ props.closeModal }
            isAnswering={ props.question.isAnswering }
            isAnswered={ props.question.answered } />
        </div>
      </form>
    </div>
  );
}
