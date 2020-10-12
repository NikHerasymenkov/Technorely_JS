import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from "redux";
import {Provider} from "react-redux";

let STATE = {
    users: []
}

function rootReducer(state = STATE, action) {
    switch (action.type) {
        case 'INIT':
            return {
                ...state,
                users: action.users
            }
        default:
            return state
    }
}

let store = createStore(rootReducer)
store.subscribe(() => console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
