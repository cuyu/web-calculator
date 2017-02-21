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
        // subscribe the redux store here so that we can pass the component object to the function
        this.props.store.subscribe(() => {
            console.log('store has been updated. Latest store state:', this.props.store.getState());
            this.setState(this.props.store.getState().value);
        });
    }

    render() {
        return (
            <div className="Screen">{this.state.value}</div>
        );
    }
}

export default Screen;