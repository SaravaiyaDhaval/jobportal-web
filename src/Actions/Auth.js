import { get, post, image, } from '../Api'
import * as types from './Types'
import Cookies from 'js-cookie'
import {setUserInfo}from "./User"

export const register = data => dispatch => {
  debugger
	return post(`auth/signup`, true, data).then(res => {
		if (res.data) {
      return res.data
		}
	})
}
export const login = data => dispatch => {
	return post('auth/signin', true, data).then(res => {		
		if (res.data) {
      debugger
      dispatch(setToken(res.data.accessToken))
      dispatch(setUserInfo(res.data))		
			Cookies.set('login', true)
			return res.data
		}
		return Promise.reject(res)
	})
}
export const logout = () => dispatch => {
	dispatch(removeToken())
	// closeSocket()
	return Promise.resolve(true)
}
export const removeToken = () => {
	Cookies.remove('token')
	return {
		type: types.REMOVE_TOKEN,
	}
}
export const setToken = token => {
	Cookies.set('token', token)
	return {
        type: types.SET_TOKEN,
        token
    }
}