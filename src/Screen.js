/**
 * Created by cuyu on 1/20/17.
 */
import React, {Component} from 'react';
import './Screen.css';

class Screen extends Component {
    constructor(props) {
        super(props);
        // this.render = this.render.bind(this);
        window.DISPLAY_NUMBER = '0';
        this.state = {
            value: 0,
        };
        window.SCREEN_OBJ = this;
        // This binding is necessary to make `this` work in the callback
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     this.setState({
    //         value: this.state.value.concat(this.state.value, buttonName)
    //     })
    // }

    render() {
        return (
            <div className="Screen">{window.DISPLAY_NUMBER}</div>
        );
    }
}

export default Screen;