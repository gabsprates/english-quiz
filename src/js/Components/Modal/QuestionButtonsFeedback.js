import React, { Component } from 'react'

export default function QuestionButtonsFeedback(props) {
  return (
    props.isCorrect ? (
      <button type="button" className="button is-fullwidth is-success"
        onClick={ () => props.closeModal(false) }>
        YEEEEEEEEEEES!!!!
        &nbsp;
        <span className='fa fa-thumbs-up'></span>
      </button>
    ) : (
      <button type="button" className="button is-fullwidth is-danger"
        onClick={ () => props.closeModal(false) }>
        OOH NOOOOO!!!!
        &nbsp;
        <span className='fa fa-thumbs-down'></span>
      </button>
    )
  );
}
