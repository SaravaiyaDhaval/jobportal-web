import * as types from './Types'


export const setNotification = (data, level = 'success', timeout = 5000, position = "bl") =>
({
    type: types.SHOW_NOTIFICATION,
    data,
    position,
    level,
    timeout
})
export const removeNotification = () =>
({
    type: types.REMOVE_NOTIFICATION
})

export const setAlert = (text, level = 'success', timeout = 5000) =>
({
    type: types.SHOW_ALERT,
    text,
    level,
    timeout
})

export const removeAlert = () =>
({
    type: types.REMOVE_ALERT
})


export const toggleModal = (value, key) =>
({
    type: types.TOGGLE_MODAL,
    value,
    key
})

export const setUiKey = (key, data) =>
({
    type: types.SET_UI_KEY,
    key,
    data,
})
