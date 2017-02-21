/**
 * Created by cuyu on 2/21/17.
 */

export default function _show(state = {value: '0'}, action) {
    console.log('_time reducer called with state ', state, ' and action ', action);

    switch (action.type) {
        case 'APPEND':
            return {
                value: state.value + action.value,
            };
        case 'ADD':
            return {
                ...state,
            };
        case 'SUB':
            return {
                ...state,
            };
        default:
            return state
    }
}
