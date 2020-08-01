import reducer from './reducer';
import ragisterData from "./Register/Register";
import verifyAccount from "./VerifyAccount/VerifyAccount";
import {combineReducers} from 'redux';

export default combineReducers({
    rootReducer:reducer,
    ragisterData: ragisterData,
    verifyAccountData: verifyAccount
})