import React, { Component } from 'react'
import QuizNotifications from './QuizNotifications'
import QuizQuestion from './Modal/QuizQuestion'
import ButtonsList from './Buttons/ButtonsList'

const questions = [
  { "answered": true },
  { "answered": false },
  { "answered": true },
  { "answered": true },
  { "answered": false }
]

export default class QuizBox extends Component {

  render() {
    return (
      <div>
        <h1 className="title h1 has-text-centered">English Quiz</h1>
        <QuizNotifications type="danger" />
        <ButtonsList questions={questions} />
        <QuizQuestion question={
          {
              "question": "Check an alternative that corresponds to a correct sequence between characters and their respective companies.\n1- Steve Jobs\n2- Steve Wozniak\n3- Marc Randolph\n4- Babak Parviz",
              "options": [
                  "Apple, Google Glass, Pixar, Netflix",
                  "Google Glass, Pixar, Netflix, Apple",
                  "Pixar, Netflix, Google Glass, Apple",
                  "Pixar, Apple, Netflix, Google Glass"
              ],
              "answer": 3,
              "answered": false
          }
        } isActive={true ? 'is-active' : ''} />
      </div>
    )
  }

}
