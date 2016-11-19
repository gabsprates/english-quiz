const React = require('react');

var ButtonsBox = React.createClass({

  render: function () {

    if (!!this.props.isAnswered) {
      return (
        <button type="button" className="button is-fullwidth is-warning">
          Pergunta já respondida
        </button>
      );
    } else {

      var cssClass = "";
      var text = "";

      if (!!this.props.isAnswering.state) {
        if (!!this.props.isAnswering.answer) {
          cssClass = "button is-large is-fullwidth is-success";
          text = "BOA!!! Acertou!";
        } else {
          cssClass = "button is-large is-fullwidth is-danger";
          text = "ERROOOOOOOOOOOOU!!!";
        }

        return (
          <button
            onClick={this.props.closeModal}
            className={cssClass}
            type="button"
            >
            {text}
          </button>
        );

      } else {

        return (
          <div className="is-flex is-fullwidth">
            <button type="submit" className="button is-fullwidth is-primary">
              Responder
            </button>

            <button
              className="button is-fullwidth is-danger"
              onClick={this.props.closeModal}
              type="button">
              Desistir
            </button>
          </div>
        );
      }
    }
  }

});

module.exports = ButtonsBox;
