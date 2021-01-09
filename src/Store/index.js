import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './Reducer/Index';
const store = createStore(
    allReducers,
    {},
    applyMiddleware(thunk)
)
export default store;