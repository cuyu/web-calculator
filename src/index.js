import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Screen from './containers/ChangeableScreen'
import Button from './containers/PlayableButton'
import {Provider} from 'react-redux'
import {store} from "./Store";


let screen = document.getElementById('top-screen');

ReactDOM.render((
    <Provider store={store}>
        <Screen/>
    </Provider>
), screen);

let buttons = document.getElementsByClassName('CalButton');
for (let i = 0; i < buttons.length; ++i) {
    ReactDOM.render((
        <Provider store={store}>
            <Button name={buttons[i].getAttribute('name')}/>
        </Provider>), buttons[i]
    );
}
