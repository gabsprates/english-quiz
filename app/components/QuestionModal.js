const React = require('react');
const Requests = require('../services/Requests.js');

var QuestionModal = React.createClass({

  thisAnswer: function (e) {
    e.preventDefault();
    console.log(this.props);
    return false;
  },

  render: function () {
    var self = this;
    var cssClass  = this.props.show === false ? "modal" : "modal is-active";
    var alternatives = this.props.infoQuestion.respostas.map(function (resp, rKey) {
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
      <div className={cssClass}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <form onSubmit={this.thisAnswer}>
            <header className="modal-card-head">
              <p className="modal-card-title">
                Questão {this.props.infoQuestion.questao}
              </p>
              <button
                onClick={this.props.closeModal}
                className="delete"
                type="button">
              </button>
            </header>
            <section className="modal-card-body">
              <h5 className="title is-5">
                {this.props.infoQuestion.pergunta}
              </h5>
              {alternatives}
            </section>
            <footer className="modal-card-foot">
              <button type="submit" className="button is-fullwidth is-primary">
                Responder
              </button>
            </footer>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = QuestionModal;
