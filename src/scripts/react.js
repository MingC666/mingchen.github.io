import React from 'react';
import ReactDOM from 'react-dom';
import Game from "./src/js/tictacton.js";

$('game1Btn').on('click', () => {
    ReactDOM.render(<Game />, document.getElementById('game1'));
})