import React, { Component } from 'react'
import Alternative from './Alternative'

export default class QuestionContent extends Component {
  render() {
    const thisQuestion = this.props.question;
    const alternatives = thisQuestion.options.map((text, index) => {
      return <Alternative
        isChecked={ thisQuestion.answered && (thisQuestion.answer == index) }
        index={ index }
        text={ text }
        key={ index + text } />
    })
    return (
      <section className="modal-card-body">
        <div className="description">
          { thisQuestion.question }
        </div>

        { alternatives }
      </section>
    );
  }
}
