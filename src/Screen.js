/**
 * Created by cuyu on 1/20/17.
 */
import React, {Component} from 'react';
import './Screen.css';

class Screen extends Component {
    render() {
        return (
            <div className="Screen">{this.props.number}</div>
        );
    }
}

export default Screen;