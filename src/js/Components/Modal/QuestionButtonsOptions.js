import React, { Component } from 'react'

export default function QuestionButtonsOptions(props) {
  return (
    props.isAnswered ? (
      <button type="button" className="button is-fullwidth is-warning"
        onClick={ () => props.closeModal(false) }>
        Already responded
      </button>
    ) : (
      <div className="is-flex is-fullwidth">
        <button type="submit" className="button is-fullwidth is-info">
          Respond
        </button>
        <button type="button" className="button is-fullwidth is-ligth"
          onClick={ () => props.closeModal(false) }>
          Give up
        </button>
      </div>
    )
  );
}
