import React, { Component } from 'react'
import QuestionButtonsOptions from './QuestionButtonsOptions'
import QuestionButtonsFeedback from './QuestionButtonsFeedback'

export default function QuestionButtons(props) {
  const buttons = props.isAnswering ? (
    <QuestionButtonsFeedback
      closeModal={ props.closeModal }
      isCorrect={ props.isAnswering.correct } />
  ) : (
    <QuestionButtonsOptions
      closeModal={ props.closeModal }
      isAnswered={ props.isAnswered } />
  );

  return (
    <footer className="modal-card-foot">
      <div className="is-flex is-fullwidth action-buttons">
        { buttons }
      </div>
    </footer>
  );
}
