const React = require('react');

var Question = React.createClass({

  showQuestion: function () {
    alert(this);
  },

  render: function () {
    var self = this;
    var questions = "carregando...";

    if (this.props.updateQuestions.length) {

      questions = this.props.updateQuestions.map(function (question, chave) {
        var btnClass = " button question ";
        btnClass += question.respondida === 0 ? ' is-info ' : 'is-off';
        return (
          <button key={chave} className={btnClass} onClick={self.showQuestion}>
            {chave}
          </button>
        );
      });

    }

    return <div className="btns is-flex">{questions}</div>;
  }

});

module.exports = Question;
