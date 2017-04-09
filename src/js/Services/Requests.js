import axios from 'axios'
import config from '../../../config/config'

class Requests {

  constructor() {
    this.server = config.webservice.addr;
  }

  getQuestions(props = []) {
    props = props.concat();
    return axios.get(`${ this.server }/questions/props/${ props }`);
  }

  getQuestionById(questionId) {
    return axios.get(`${ this.server }/questions/${ questionId }`);
  }

}

export default (new Requests());
