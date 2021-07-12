import axios from "axios";

//HTTP GET CALL
export async function get(url) {
  return axios.get(`${process.env.PUBLIC_URL}${url}`);
}

//HTTP POST CALL
export async function post(url) {
  return axios.post(`${process.env.PUBLIC_URL}${url}`);
}
