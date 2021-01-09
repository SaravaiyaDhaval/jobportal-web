// import {REGISTER,  REGISTER_SUCCESS, REGISTER_FAIL, LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, } from "../../Actions/Types";

// const user = JSON.parse(localStorage.getItem("user"));

// const initialState = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

// export default function (state = initialState, action) {
//   const { type, payload } = action;

//   switch (type) {
//     case REGISTER:
//       return {
//         ...state,
//         loading: true,
//         loaded: false,
//         user: user
//       };
//     case REGISTER_SUCCESS:
//       return {
//         ...state,
//         data: payload.data,
//         loading: false,
//         loaded: true,
//         error: null,
//         user: user
//       };
//     case REGISTER_FAIL:
//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//         error: payload.data,
//         user: null
//       };
//     case LOGIN:
//       return {
//         ...state,
//         loading: true,
//         loaded: false,
//         user: user
//       };
//     case LOGIN_SUCCESS:
//       return {
//         ...state,
//         data: payload.data,
//         loading: false,
//         loaded: true,
//         error: null,
//         user: user
//       };
//     case LOGIN_FAIL:
//       return {
//         ...state,
//         loading: false,
//         loaded: true,
//         error: payload.data,
//         user: null,
//       };
//     case LOGOUT:
//       return {
//         ...state,
//         user: null,
//       };
//     default:
//       return state;
//   }
// }
