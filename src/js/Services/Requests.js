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

   setAnswered(questionId, answered = true) {
    return axios.put(`${ this.server }/questions/${ questionId }`, {
      answered: answered
    });
  }

  resetQuiz(exec) {

    const updateArray = (array) => {
      array.data.forEach(question => {
        this.setAnswered(question._id, false)
          .then(() => { exec(question._id, false) });
      });
    }

    this.getQuestions(['answered'])
      .then(updateArray);
  }

}

export default (new Requests());
