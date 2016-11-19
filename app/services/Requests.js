const axios = require('axios');

module.exports = {

  getQuestions: function () {
    return axios.get("./webservice/get");
  },

  setAnswered: function (question) {
    return axios.get("./webservice/get?question=".concat(question));
  }

}
