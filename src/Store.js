/**
 * Created by cuyu on 2/21/17.
 */
import {createStore, combineReducers} from 'redux'
import valueReducer from './reducers/valueReducer'

let reducer = combineReducers({value: valueReducer});
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// let store = createStore(reducer);

export {store}