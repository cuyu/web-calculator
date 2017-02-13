/**
 * Created by cuyu on 2/13/17.
 */
import EventEmitter from 'events';
import assign from 'object-assign';

let NumberStore = assign({}, EventEmitter.prototype, {
    number: '0',

    getNumber: function () {
        console.log(this.number);
        return this.number;
    },

    addNewNumberHandler: function (text) {
        this.number += text;
    },

    emitChange: function () {
        this.emit('change');
    },

    addChangeListener: function (callback) {
        this.on('change', callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

export default NumberStore;