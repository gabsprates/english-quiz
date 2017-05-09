import React, { Component } from 'react'

export default function Alternative(props) {
  return (
    <div className="alternatives">
      <div className="control alternative">
        <label className="label">
          <input type="radio" name="answer"
            defaultChecked={ props.isChecked }
            value={ props.index } />
          <span className="fa"></span>
          { props.text }
        </label>
      </div>
    </div>
  );
}
