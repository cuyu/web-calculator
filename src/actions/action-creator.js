/**
 * Created by cuyu on 2/23/17.
 */

export const appendNumber = (value) => {
    return {
        type: 'APPEND',
        value: value
    }
};

export const clearNumber = () => {
    return {
        type: 'CLEAR',
    }
};