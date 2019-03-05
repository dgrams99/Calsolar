import axios from "axios";

export default {
   
    send: function(data) {
      return axios.post("http://localhost:3001/api/send", data);
    }
  };