const React = require('react');

var Alternative = React.createClass({

  render: function () {
    var attributes = {
      value: this.props.value,
      name: "answer",
      type: "radio"
    };

    if (this.props.answered) {
      attributes.disabled = "disabled";

      if (this.props.rightAnswer === attributes.value) {
        attributes.checked = "checked";
      }
    }

    return (
      <div className="control alternative">
        <label className="label">
          <input {...attributes} />
          <span className="fa"></span>
          {this.props.text}
        </label>
      </div>
    );
  }

});

module.exports = Alternative;
