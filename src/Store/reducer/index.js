import ragisterData from "./Auth";
import verifyAccount from "./VerifyAccount";
import user from "./User"
import ui  from "./UI";
import {combineReducers} from 'redux';

export default combineReducers({
    ragisterData: ragisterData,
    verifyAccountData: verifyAccount,
    ui:ui,
    user:user
})