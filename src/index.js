import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './styles/react_dates_overrides.css';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

window.addEventListener("load", () => {
    if ('serviceWorker' in navigator) {
        console.log("In window load event")
        navigator.serviceWorker.register("service-worker.js")
        .then((registration) => {
            console.log("I am readey to register a service worker");

        })
        .catch(e => console.log("Somethings went wrong!!"))
    } else {
        console.log("Service worker not support");
    }
})