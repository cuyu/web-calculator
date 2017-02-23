/**
 * Created by cuyu on 1/20/17.
 */
import React, {Component} from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <button className="Button" onClick={this.props.onClick}>{this.props.name}</button>
        );
    }
}

export default Button;