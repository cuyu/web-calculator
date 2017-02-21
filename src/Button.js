/**
 * Created by cuyu on 1/20/17.
 */
import React, {Component} from 'react';
import {appendActionCreator} from './actions/action-creator'
import {store} from './Store'
import './Button.css';

class Button extends Component {

    handleClick() {
        console.log(this.props.name);
        store.dispatch(appendActionCreator(this.props.name));
    }

    render() {
        return (
            <button className="Button" onClick={this.handleClick.bind(this)}>{this.props.name}</button>
        );
    }
}

export default Button;