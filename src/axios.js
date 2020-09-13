import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-4d092.cloudfunctions.net/api", //the api  (cloud function) url
  // http://localhost:5001/clone-4d092/us-central1/api
});

export default instance;
