const axios = require('axios');

var QuizQuestions = {

  get: function () {
    return axios.get("./webservice/get/questions");
  }

};

module.exports = QuizQuestions;
