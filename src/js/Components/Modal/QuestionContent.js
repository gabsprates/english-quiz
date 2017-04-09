import React, { Component } from 'react'
import Alternative from './Alternative'

export default class QuestionContent extends Component {
  render() {
    const alternatives = this.props.question.options.map((text, index) => {
      return <Alternative
        index={ index }
        text={ text }
        key={ index + text } />
    })
    return (
      <section className="modal-card-body">
        <div className="description">
          { this.props.question.question }
        </div>

        { alternatives }
      </section>
    );
  }
}
