import * as types from '../../Actions/Types'

const initialState = {
    isLoad: false,
    notifications:[],
    alerts:[],
    modals: {
        switch_profile: false,
    },
}

export default function ui(ui = initialState, action = {}) {
    switch (action.type) {
        case types.SET_UI_KEY:
            return Object.assign({}, ui, {
                [action.key]: action.data
            })
        case types.SHOW_ALERT:
            let tempMessages = Object.assign([], ui.alerts)
            tempMessages.push({ 'text': action.text, 'level': action.level, 'timeout': action.timeout })
            return Object.assign({}, ui, {
                alerts: tempMessages
            });
        case types.REMOVE_ALERT:
            return Object.assign({}, ui, {
                alerts: []
            });
        case types.SHOW_NOTIFICATION:
            let tempNotifications = Object.assign([], ui.notifications)
             tempNotifications.push({ 'data': action.data,"position":action.position , 'level': action.level, 'timeout': action.timeout })
             return Object.assign({}, ui, {
                notifications: tempNotifications
             });
                
        case types.REMOVE_NOTIFICATION:
            return Object.assign({}, ui, {
                notifications: []
            });
        
        case types.TOGGLE_MODAL:
            let modals = Object.assign({}, ui.modals)
            modals[action.key] = action.value
            return Object.assign({}, ui, {
                modals
            });
        default:
            return ui;
    }
}