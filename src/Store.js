/**
 * Created by cuyu on 2/21/17.
 */
import {createStore, combineReducers} from 'redux'
import valueReducer from './reducers/valueReducer'

let reducer = combineReducers({value: valueReducer});
let store = createStore(reducer);

export {store}