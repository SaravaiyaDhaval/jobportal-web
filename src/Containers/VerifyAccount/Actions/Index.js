


import axios from 'axios';
const baseURL = process.env.BASE_API_URL;

export function verifyUserAccount(values) {
  console.log("axios.defaults.baseURL---->", axios.defaults.baseURL);
  debugger
  return (dispatch) => {
    dispatch({ type: "VERIFY_ACCOUNT" });
    axios.post('http://localhost:4000/accounts/verify-email', values)
      .then((res) => {
        debugger
        dispatch({ type: "VERIFY_ACCOUNT_SUCCESS", payload: res });
      })
      .catch((error) => {
        debugger
        dispatch({ type: "VERIFY_ACCOUNT_FAILURE", payload: error });
      })
  }

}