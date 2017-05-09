import React, { Component } from 'react'
import Alternative from './Alternative'

export default function QuestionContent(props) {
  const alternatives = props.question.options.map((text, index) => {
    return <Alternative
      isChecked={ props.question.answered && (props.question.answer == index) }
      index={ index }
      text={ text }
      key={ index + text } />
  });

  return (
    <section className="modal-card-body">
      <div className="description">
        { props.question.question }
      </div>

      { alternatives }
    </section>
  );
}
