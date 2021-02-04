import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import store from "./data/state";
import reportWebVitals from './reportWebVitals';

const rerenderApplication = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>, document.getElementById('root')
    );
}
rerenderApplication(store)
store.renderObserser(rerenderApplication)
reportWebVitals()
