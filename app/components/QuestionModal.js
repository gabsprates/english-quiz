const React = require('react');
const Requests = require('../services/Requests.js');

var QuestionModal = React.createClass({

  render: function () {
    var cssClass  = this.props.show === false ? "modal" : "modal is-active";
    var alternatives = this.props.infoQuestion.respostas.map(function (resp, rKey) {
      console.log(resp);
      return (
        <div className="control" key={rKey}>
          <label className="label">
            <input value={rKey} name='answer' type="radio" />
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
              <button className="delete" onClick={this.props.closeModal}></button>
            </header>
            <section className="modal-card-body">
              <h3 className="title is-3">
                {this.props.infoQuestion.pergunta}
              </h3>
              {alternatives}
            </section>
            <footer className="modal-card-foot">
              <a className="button is-primary">Save changes</a>
              <a className="button">Cancel</a>
            </footer>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = QuestionModal;
