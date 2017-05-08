import React, { Component } from 'react'
import ButtonItem from './ButtonItem'

export default function ButtonsList(props) {
  const buttons = props.questions.map((obj, index) => {
    return <ButtonItem
      questionId={ obj._id }
      answered={ obj.answered ? 'is-off' : 'is-info' }
      handle={ props.handle }
      num={ index + 1 }
      key={ obj._id }  />
  });
  return (
    <div className='buttons-list is-flex'>
      { buttons }
    </div>
  )
}
