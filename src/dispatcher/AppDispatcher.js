/**
 * Created by cuyu on 2/13/17.
 */
import flux from 'flux';
let AppDispatcher = new flux.Dispatcher();
import NumberStore from '../stores/NumberStore';

AppDispatcher.register(function (action) {
    switch(action.actionType) {
        case 'APPEND_NUMBER':
            NumberStore.addNewNumberHandler(action.text);
            NumberStore.emitChange();
            break;
        default:
        // no op
    }
});

export default AppDispatcher;