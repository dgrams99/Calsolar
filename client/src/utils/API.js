import axios from "axios";

export default {
   
    send: function(data) {
      return axios.post("https://finfinder.herokuapp.com/api/send", data);
    }
  };