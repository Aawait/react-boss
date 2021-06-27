
import React from 'react'
import ReactDOM from 'react-dom'
import store from './redux/store'
import {Provider} from 'react-redux'

import App from './App'
import {BrowserRouter} from 'react-router-dom'
import 'antd-mobile/dist/antd-mobile.css'
import './assets/css/index.less'

import './test/socketio_test'
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
,document.getElementById('root'))