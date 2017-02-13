/**
 * Created by cuyu on 2/13/17.
 */
/**
 * Created by cuyu on 2/13/17.
 */
import React from 'react';
import ButtonActions from './actions/ButtonActions';
import Button from './Button';

let MyButtonController = React.createClass({

    applyButton: function (event) {
        ButtonActions.appendNumber(this.props.name);
        console.log(this.props.name);
    },

    render: function () {
        return <Button
            name={this.props.name}
            onClick={this.applyButton}
        />;
    }
});

export default MyButtonController;