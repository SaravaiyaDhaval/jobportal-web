


import axios from 'axios';
const baseURL = process.env.BASE_API_URL;

export function registerUser(values) {
  console.log("axios.defaults.baseURL---->", axios.defaults.baseURL);
  debugger
  return (dispatch) => {
    dispatch({ type: "CREATE" });
    axios.post('http://localhost:4000/accounts/register', values)
      .then((res) => {
        debugger
        dispatch({ type: "CREATE_SUCCESS", payload: res });
      })
      .catch((error) => {
        debugger
        dispatch({ type: "CREATE_FAILURE", payload: error });
      })
  }

}