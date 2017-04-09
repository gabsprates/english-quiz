import React, { Component } from 'react'

export default function QuizNotifications(props) {
  return (
    <div className="container">
      <div className={`notification is-${ props.type }`}>
        { props.notification }
      </div>
    </div>
  )
}
