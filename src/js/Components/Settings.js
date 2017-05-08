import React, { Component } from 'react'
import Requests from '../Services/Requests'

export default class Settings extends Component {
  render() {
    return (
      <div className='settings'>
        <h5 className='title is-5'><strong>Settings:</strong></h5>
        <div className="field has-addons">

          <p className="control">
            <button type='button'
              onClick={ () => { Requests.resetQuiz(this.props.updateButton); } }
              className='button is-warning'>
              <span className="icon is-small">
                <i className='fa fa-refresh'></i>
              </span>
              <span>Reset quiz</span>
            </button>
          </p>

        </div>
      </div>
    );
  }
}
