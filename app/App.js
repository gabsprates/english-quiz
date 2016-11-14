const React     = require('react');
const ReactDOM  = require('react-dom');
var Question    = require('./components/Question');

ReactDOM.render(
  <div className="container">
    <Question />
  </div>,
  document.getElementById('questions')
);
