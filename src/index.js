import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import{ createStore } from 'redux'

import App from './components/App'
import reminders from './reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const store = createStore(reminders);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    <App />
   </Provider>  
)

