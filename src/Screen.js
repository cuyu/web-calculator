/**
 * Created by cuyu on 1/20/17.
 */
import React, {Component} from 'react';
import './Screen.css';

class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0',
        };
        window.SCREEN_OBJ = this;
    }

    render() {
        return (
            <div className="Screen">{this.state.value}</div>
        );
    }
}

export default Screen;