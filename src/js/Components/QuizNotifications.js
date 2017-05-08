import React, { Component } from 'react'

export default function QuizNotifications(props) {
  return (
    <div className="container">
      <div className={`notification is-${ props.type }`}>
        <button type="button" className="delete" onClick={ props.close }>
        </button>
        { props.notification }
      </div>
    </div>
  )
}
