/**
 * Created by cuyu on 1/20/17.
 */
import React, {Component, PropTypes} from 'react';
import './Screen.css';

class Screen extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
    };

    static defaultProps = {value: "0"};

    render() {
        return (
            <div className="Screen">{this.props.value}</div>
        );
    }
}

export default Screen;