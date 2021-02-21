import React from "react"
import App from './App';
import ReactDOM from 'react-dom';
import store from "./redux/redux-state";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, document.getElementById('root')
);
reportWebVitals()

/* 
    Создание Контекста React 

    const MyContext = React.createContext(store)
    <MyContext.Provider value={store}/>

    Испольовать Контекст 

    <MyContext.Consumer>
        { value => {function}}
    </MyContext.Consumer>
*/

// React.createContext(null)
// React.createRef()
// const redusers = {

// }
// const redux = createStore(redusers)

// Contexxt 
//connect 