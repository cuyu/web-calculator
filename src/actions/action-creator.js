/**
 * Created by cuyu on 2/21/17.
 */

let appendActionCreator = function (value) {
    return {
        type: 'APPEND',
        value: value
    }
};

export {appendActionCreator}