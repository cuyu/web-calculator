/**
 * Created by cuyu on 1/20/17.
 */
import React, {Component} from 'react';
import './Button.css';

class Button extends Component {

    handleClick() {
        console.log(this.props.name);
        let newValue = window.SCREEN_OBJ.state.value + this.props.name;
        window.SCREEN_OBJ.setState({value: newValue});
    }

    render() {
        return (
            <button className="Button" onClick={this.handleClick.bind(this)}>{this.props.name}</button>
        );
    }
}

export default Button;