const React     = require('react');
const ReactDOM  = require('react-dom');
var Questions   = require('./components/Questions');
var QuestionModal = require('./components/QuestionModal');

ReactDOM.render(
  <div className="container" id="quiz-content">
    <h1 className="title is-1 has-text-centered">English Quiz</h1>
    <h2 className="subtitle is-3 has-text-centered">questions</h2>
    <div>
      <Questions />
    </div>
    <QuestionModal />
  </div>,
  document.getElementById('quiz')
);
