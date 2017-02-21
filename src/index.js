import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './Store'
import './index.css';
import Button from './Button'
import Screen from './Screen'


let screen = document.getElementById('top-screen');
ReactDOM.render(<Screen store={store}/>, screen);

let buttons = document.getElementsByClassName('CalButton');
for (let i = 0; i < buttons.length; ++i) {
    ReactDOM.render(
        <Button name={buttons[i].getAttribute('name')}/>,
        buttons[i]
    );
}
