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

export const calculate = () => {
    return {
        type: 'EQUAL',
    }
};

export const addNumber = () => {
    return {
        type: 'ADD',
    }
};

export const subNumber = () => {
    return {
        type: 'SUB',
    }
};

export const multiplyNumber = () => {
    return {
        type: 'MULTIPLY',
    }
};