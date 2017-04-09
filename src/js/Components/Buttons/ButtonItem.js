import React, { Component } from 'react'

export default function ButtonItem(props) {
  return (
    <button
      className={`button button-item ${ props.answered }`}
      onClick={ () => props.handle({
        number: props.num,
        id: props.questionId
      }) }
      type="button"
      >
      { props.num }
    </button>
  )
}
