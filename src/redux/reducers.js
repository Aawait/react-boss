/* reducer模块，用于汇总所有的reducer并暴露 */

import {combineReducers} from 'redux'
import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from './constant'
import {getRedirectTo} from '../utils'

const initUser = {
    username: '',  // 用户名
    type: '',       // 用户类型
    message: '',    // 错误信息
    redirectTo: ''  // 需要自动重定向的路由路径
}

function user(preState=initUser,action){
   
    const {type,data} = action
    switch(type){
        case AUTH_SUCCESS:
            return {...data,redirectTo:getRedirectTo(data.type,data.header)}
        case ERROR_MSG:
            return {...preState,message:data}
        case RECEIVE_USER:
            return data   // data是user
        case RESET_USER:
            return {...initUser,message:data}  // data是message
        default:
            return preState
    }
}


export default combineReducers({
    user
})
/* redux中的最终数据 {xxx:0,yyy:1} */