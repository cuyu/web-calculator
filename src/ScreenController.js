/**
 * Created by cuyu on 2/13/17.
 */
import React from 'react';
import NumberStore from './stores/NumberStore';
import Screen from './Screen';

let MyScreenController = React.createClass({
    getInitialState: function () {
        return {
            number: NumberStore.getNumber()
        };
    },

    componentDidMount: function () {
        NumberStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        NumberStore.removeChangeListener(this._onChange);
    },

    _onChange: function () {
        this.setState({
            number: NumberStore.getNumber()
        });
    },

    render: function () {
        return <Screen
            number={this.state.number}
        />;
    }
});

export default MyScreenController;