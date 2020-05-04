import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import {createStore,combineReducers} from 'redux';
import getDataReducer from './store/reducers/getdataReducer';
import getAddressReducer from './store/reducers/addressReducer'

const rootReducer=combineReducers({
    dataReducer:getDataReducer,
    addressReducer:getAddressReducer

});

const store=createStore(rootReducer);
const app=(
    <Provider store={store} >
        <App/>
    </Provider>
)


ReactDOM.render(app,document.getElementById('root'));
registerServiceWorker();
