import * as types from '../../Actions/Types'
import Cookies from 'js-cookie'

const initialState = {
    token: Cookies.get('token'),
    data: {},
}

const user = (user = initialState, action = {}) => {
    console.log("Cookies-->",Cookies)
    
    switch (action.type) {
        case types.SET_TOKEN:
            return Object.assign({}, user, {
                token: action.token
            });
        case types.REMOVE_TOKEN:
            return Object.assign({}, user, {
                token: false
            });
        case types.SET_USER_INFO:
            return Object.assign({}, user, {
                data: {...user.data, ...action.data}
            })
        case types.SET_USER_KEY:
            return Object.assign({}, user, {
                [action.key]: {...user[action.key], ...action.data},
            })

        default:
            return user;
    }
}

export default user