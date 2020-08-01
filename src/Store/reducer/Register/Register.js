
export default (state = "", action) => {
  const payload = action.payload

  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        loading: true,
        loaded: false
      }

    case "REGISTER_SUCCESS":
      return {
        ...state,
        data: payload.data,
        loading: false,
        loaded: true,
        error: null
      }
    case "REGISTER_FAILURE":

      return {
        ...state,
        loading: false,
        loaded: true,
        error: payload
      }
    default:
      return state
  }
}