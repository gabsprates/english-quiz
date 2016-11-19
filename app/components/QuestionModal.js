const React       = require('react');
const Alternative = require('./Alternative');
const ButtonsBox  = require('./ButtonsBox');

var QuestionModal = React.createClass({

  getInitialState: function () {
    return {
      isAnswering: {
        state: false,
        answer: false
      }
    };
  },

  thisAnswer: function (e) {
    e.preventDefault();
    var answerUser    = e.target.answer.value || null;
    var answerCorrect = +this.props.infoQuestion.resposta;
    var rightAnswer = false;

    if (answerUser === null) {
      return false;
    }
    answerUser = answerUser === null ? null : +answerUser;

    if (answerUser === answerCorrect) {
      this.setState({ isAnswering: { state: true, answer: true } });
      rightAnswer = true;
    } else {
      this.setState({ isAnswering: { state: true, answer: false } });
    }
    this.props.whenResponse(
      this.props.infoQuestion.questao,
      rightAnswer
    );
    return false;
  },

  render: function () {
    var self = this;
    var infoThisQuestion = this.props.infoQuestion;
    var alternatives = infoThisQuestion.alternativas.map(function (resp, rKey) {
      return (
        <Alternative
          rightAnswer={infoThisQuestion.resposta}
          answered={!!infoThisQuestion.respondida}
          value={rKey}
          text={resp}
          key={rKey}
          />
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
              <ButtonsBox
                isAnswered={infoThisQuestion.respondida}
                isAnswering={this.state.isAnswering}
                closeModal={this.props.closeModal}
                />
            </footer>

          </form>
        </div>
      </div>
    );
  }

});

module.exports = QuestionModal;
