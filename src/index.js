import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import store from "./redux/state";
import reportWebVitals from './reportWebVitals';

/* 
    Создание Контекста React 

    const MyContext = React.createContext(store)
    <MyContext.Provider value={store}/>

    Испольовать Контекст 

    <MyContext.Consumer>
        { value => {function}}
    </MyContext.Consumer>
*/
export const MyContext = React.createContext(store)


const rerenderApplication = (store) => {
    ReactDOM.render(
        <React.StrictMode>
            <MyContext.Provider value={store} />
                <App store={store}/>
             <MyContext.Provider/>
        </React.StrictMode>, document.getElementById('root')
    );
}

rerenderApplication(store)
store.renderObserser(rerenderApplication)
reportWebVitals()
