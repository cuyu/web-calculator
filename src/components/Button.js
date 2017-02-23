/**
 * Created by cuyu on 1/20/17.
 */
import React, {Component, PropTypes} from 'react';
import './Button.css';

class Button extends Component {
    static propTypes = {
        onClick: PropTypes.func.isRequired,
    };

    render() {
        return (
            <button className="Button" onClick={this.props.onClick}>{this.props.name}</button>
        );
    }
}

export default Button;