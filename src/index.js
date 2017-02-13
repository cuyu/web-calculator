import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyButtonController from './ButtonController'
import MyScreenController from './ScreenController'


let screen = document.getElementById('top-screen');
ReactDOM.render(<MyScreenController></MyScreenController>, screen);

let buttonDoms = document.getElementsByClassName('CalButton');
for (let i = 0; i < buttonDoms.length; ++i) {
    ReactDOM.render(
        <MyButtonController name={buttonDoms[i].getAttribute('name')}/>,
        buttonDoms[i]
    );
}
