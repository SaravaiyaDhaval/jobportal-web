
export default (state = "", action) => {
    const payload = action.payload
  
    switch (action.type) {
      case "VERIFY_ACCOUNT":
        return {
          ...state,
          loading: true,
          loaded: false
        }
  
      case "VERIFY_ACCOUNT_SUCCESS":
        return {
          ...state,
          data: payload.data,
          loading: false,
          loaded: true,
          error: null
        }
      case "VERIFY_ACCOUNT_FAILURE":
  
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