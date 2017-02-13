/**
 * Created by cuyu on 2/13/17.
 */
import AppDispatcher from '../dispatcher/AppDispatcher';

let ButtonActions = {
    appendNumber: function (text) {
        AppDispatcher.dispatch({
            actionType: 'APPEND_NUMBER',
            text: text
        });
    },
    calculate: function () {
        AppDispatcher.dispatch({
            actionType: 'CALCULATE',
        })
    }
};

export default ButtonActions;