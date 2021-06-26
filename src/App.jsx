import React, { Component,lazy,Suspense } from 'react'
import {Switch,Route} from 'react-router-dom'

import Main from './containers/Main/Main'
const Login = lazy( () => import('./containers/Login/Login'))
const Register = lazy( () => import('./containers/Register/Register'))

export default class App extends Component {
    render() {
        return (
            <div>
                <Suspense fallback={<h2>Loading...</h2>}>
                   <Switch>
                      <Route path="/login" component={Login} />
                      <Route path="/register" component={Register} />
                      {/* 默认组件，只要前面的没有匹配的，就会渲染出这个路由组件 */}
                      <Route component={Main} />  
                   </Switch>
                </Suspense>
            </div>
        )
    }
}
