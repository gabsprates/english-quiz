const React     = require('react');
const ReactDOM  = require('react-dom');
var Questions   = require('./components/Questions');

ReactDOM.render(
  <div className="container">
    <h1 className="title is-1 has-text-centered">English Quiz</h1>
    <div className="container btns">
      <Questions />
    </div>
  </div>,
  document.getElementById('quiz')
);
