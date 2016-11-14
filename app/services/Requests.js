const axios = require('axios');

module.exports = {

  getQuestions: function () {
    return axios.get("./webservice/get/questions");
  }

}
