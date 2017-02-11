import React, { Component } from 'react'
import ButtonItem from './ButtonItem'

export default class ButtonsList extends Component {
  render() {
    const buttons = this.props.questions.map((obj, index) => {
      return <ButtonItem
        answered={obj.answered ? 'is-off' : 'is-info'}
        num={index + 1}
        key={index}  />
    })
    return (
      <div className='buttons-list is-flex'>
        {buttons}
      </div>
    )
  }
}
