const React = require('react');

var Question = React.createClass({

  showQuestion: function (e) {
    var qtn = +e.target.value;
    this.props.listQuestions[qtn].questao = qtn;
    qtn = this.props.listQuestions[qtn];
    this.props.showQuestion(qtn);
  },

  render: function () {
    var self = this;
    var questions = "loading...";

    if (this.props.listQuestions.length) {

      questions = this.props.listQuestions.map(function (question, qKey) {
        var btnClass = " button question ";
        btnClass += question.respondida === 0 ? ' is-info ' : 'is-off';
        return (
          <button
            onClick={self.showQuestion}
            className={btnClass}
            type="button"
            value={qKey}
            key={qKey}
            >
            {qKey}
          </button>
        );
      });

    }

    return (
      <div id="questions-content" className="btns is-flex">
        {questions}
      </div>
    );
  }

});

module.exports = Question;
