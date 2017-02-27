/**
 * Created by cuyu on 2/23/17.
 */

let _MAX_LENGTH = 10;

export default function _show(state = {value: '0', cachedValue: '0', freshValue: true}, action) {
    console.log('_time reducer called with state ', state, ' and action ', action);

    switch (action.type) {
        case 'APPEND':
            if (state.freshValue) {
                return {
                    value: action.value,
                    cachedValue: state.value,
                    operator: state.operator,
                    freshValue: false
                };
            }
            else {
                if (state.value === '0') {
                    return {
                        value: action.value,
                        cachedValue: state.cachedValue,
                        operator: state.operator,
                        freshValue: false
                    };
                }
                else if (state.value.length >= _MAX_LENGTH) {
                    return state;
                }
                else {
                    return {
                        value: state.value + action.value,
                        cachedValue: state.cachedValue,
                        operator: state.operator,
                        freshValue: false
                    };
                }
            }

        case 'ADD':
            return {
                value: state.value,
                cachedValue: state.cachedValue,
                operator: '+',
                freshValue: true
            };

        case 'SUB':
            return {
                value: state.value,
                cachedValue: state.cachedValue,
                operator: '-',
                freshValue: true
            };

        case 'MULTIPLY':
            return {
                value: state.value,
                cachedValue: state.cachedValue,
                operator: '*',
                freshValue: true
            };

        case 'DIVIDE':
            return {
                value: state.value,
                cachedValue: state.cachedValue,
                operator: '/',
                freshValue: true
            };

        case 'REVERSE':
            let reversedValue;
            if (state.value.startsWith('-')) {
                reversedValue = state.value.substr(1);
            }
            else {
                reversedValue = '-' + state.value;
            }
            return {
                value: reversedValue,
                cachedValue: state.cachedValue,
                operator: state.operator,
                freshValue: state.freshValue
            };

        case 'PERCENTAGE':
            return {
                value: String(Number(state.value) / 100),
                cachedValue: state.cachedValue,
                operator: state.operator,
                freshValue: state.freshValue
            };

        case 'EQUAL':
            if (state.operator) {
                let calculatedValue = eval(state.cachedValue + state.operator + state.value);
                return {
                    value: String(calculatedValue).substr(0, _MAX_LENGTH),
                    cachedValue: state.value,
                    operator: null,
                    freshValue: true
                };
            }
            else {
                return state;
            }

        case 'CLEAR':
            return {
                value: '0',
                cachedValue: '0',
                operator: null,
                freshValue: true
            };
        default:
            return state
    }
}