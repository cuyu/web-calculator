/**
 * Created by cuyu on 2/23/17.
 */

let _MAX_LENGTH = 10;

export default function _show(state = {value: '0'}, action) {
    console.log('_time reducer called with state ', state, ' and action ', action);

    switch (action.type) {
        case 'APPEND':
            if (state.value === '0') {
                return {value: action.value};
            }
            else if (state.value.length >= _MAX_LENGTH) {
                return {value: state.value};
            }
            else {
                return {value: state.value + action.value};
            }

        case 'ADD':
            return {
                ...state,
            };
        case 'SUB':
            return {
                ...state,
            };
        case 'CLEAR':
            return {value: '0'};
        default:
            return state
    }
}