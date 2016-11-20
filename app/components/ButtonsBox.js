const React = require('react');

var ButtonsBox = React.createClass({

  render: function () {

    if (!!this.props.isAnswered) {
      return (
        <button
          className="button is-fullwidth is-warning"
          onClick={this.props.closeModal}
          type="button"
          >
          Pergunta já respondida
        </button>
      );
    } else {

      var text      = "";
      var cssClass  = "";
      var classIcon = "fa";

      if (!!this.props.isAnswering.state) {
        if (!!this.props.isAnswering.answer) {
          classIcon += " fa-smile-o";
          cssClass  = "button is-large is-fullwidth is-success";
          text      = "YEEEEES!!!";
        } else {
          classIcon += " fa-frown-o";
          cssClass  = "button is-large is-fullwidth is-danger";
          text      = "NOOOOOOOOOOOO!!!";
        }

        return (
          <button
            onClick={this.props.closeModal}
            className={cssClass}
            type="button"
            >
            {text}
            <span className="icon">
              <i className={classIcon}></i>
            </span>
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
