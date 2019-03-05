import axios from "axios";

export default {
   
    send: function(data) {
      return axios.post("/api/send", data);
    }
  };