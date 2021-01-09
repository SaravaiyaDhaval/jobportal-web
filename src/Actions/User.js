import * as types from './Types'
export const setUserKey = (key, data) => {
	return {
		type: types.SET_USER_KEY,
		key,
		data
	}
}
export const setUserInfo = data =>
	({
		type: types.SET_USER_INFO,
		data,
	})
