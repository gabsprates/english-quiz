import React, { Component } from 'react'

export default class QuestionButtonsOptions extends Component {
  render() {
    return (
      this.props.isCorrect ? (
        <button type="button" className="button is-fullwidth is-success"
          onClick={ () => this.props.closeModal(false) }>
          YEEEEEEEEEEES!!!!
          &nbsp;
          <span className='fa fa-thumbs-up'></span>
        </button>
      ) : (
        <button type="button" className="button is-fullwidth is-danger"
          onClick={ () => this.props.closeModal(false) }>
          OOH NOOOOO!!!!
          &nbsp;
          <span className='fa fa-thumbs-down'></span>
        </button>
      )
    );
  }
}
