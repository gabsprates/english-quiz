const React = require('react');
const Requests = require('../services/Requests.js');

var QuestionModal = React.createClass({

  thisAnswer: function (e) {
    e.preventDefault();
    var answerUser    = e.target.answer.value || null;
    var answerCorrect = +this.props.infoQuestion.correta;
    answerUser = answerUser === null ? null : +answerUser;

    if (answerUser === answerCorrect) {
      alert("correct");
    } else {
      alert("wrong");
    }
    // this.props.whenResponse();
    return false;
  },

  render: function () {
    var self = this;
    var infoThisQuestion = this.props.infoQuestion;
    var alternatives = infoThisQuestion.respostas.map(function (resp, rKey) {
      return (
        <div className="control alternative" key={rKey}>
          <label className="label">
            <input value={rKey} name="answer" type="radio" />
            <span className="fa"></span>
            {resp}
          </label>
        </div>
      );
    });

    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-card">
          <form onSubmit={this.thisAnswer} name={"form-question-" + infoThisQuestion.questao}>
            <header className="modal-card-head">
              <p className="modal-card-title">
                Questão {infoThisQuestion.questao}
              </p>
              <button
                onClick={this.props.closeModal}
                className="delete"
                type="button">
              </button>
            </header>
            <section className="modal-card-body">
              <div className="modal-question-text">
                {infoThisQuestion.pergunta}
              </div>
              {alternatives}
            </section>
            <footer className="modal-card-foot">
              <button type="submit" className="button is-fullwidth is-primary">
                Responder
              </button>
              <button
                className="button is-fullwidth is-danger"
                onClick={this.props.closeModal}
                type="button">
                Desistir
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = QuestionModal;
