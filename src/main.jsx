import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createStore, combineReducers} from 'redux'
import allReducer from './redux/reducer/index.js'
import { Provider } from 'react-redux'

const store = createStore(allReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
