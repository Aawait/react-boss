/* 这个模块用于生产action对象 */

import {reqRegister,reqLogin,reqUpdateUser} from '../api/index'

import {AUTH_SUCCESS,ERROR_MSG,RECEIVE_USER,RESET_USER} from './constant'

export const autuSuccess = user => ({type:AUTH_SUCCESS,data:user})  // 注册/登录成功的同步action对象

export const errorMsg = msg => ({type:ERROR_MSG,data:msg})        // 注册失败的同步action对象

export const receiveUser = user => ({type:RECEIVE_USER,data:user})  // 接收用户的同步action

export const resetUser = msg => ({type:RESET_USER,data:msg})        // 重置用户的同步action

// 异步action 注册的任务

export const register = user => {
    
    // 检查表单提交的user数据合法性
    const {username,password,password2} = user
    
    // 生成action对象后，redux会自动dispatch 推入reducer加工数据?
    if(!(username.trim() && password.trim() && password2.trim())){
       return  errorMsg('选项不能为空')
    }else if(password.trim() !== password2.trim()){
        return errorMsg('两次密码输入不同')
    }

    return async dispatch => {

        try{
            const response = await reqRegister(user)   
            const result = response.data  // 如果失败后台返回{code:0,message:'用户名已存在'}  如果成功返回{code:1,data}
            // =0注册失败
            if(result.code === 0){
                // 分发失败的action
                dispatch(errorMsg(result.message))
            }else{
                // 分发成功的action
                dispatch(autuSuccess(result.data))
            }
        }catch(err){
            console.log("请求出错了",err);
        }
    }
}

// 异步action  登录的任务
export const login = user => {

    // 前台表单验证
    const {username,password} = user
    if(!(username.trim() && password.trim())){
        return errorMsg('用户名或密码不能为空')
    }

    return async dispatch => {

        try{
            const response = await reqLogin(user)
            const result = response.data
             console.log('result',result);
            if(result.code === 0){
                console.log("登陆失败",result.message);
                dispatch(errorMsg(result.message))
            }else {
                console.log("登陆成功",result.data);
                dispatch(autuSuccess(result.data))
            }
      }catch(err){
            console.log("请求出错了",err);
      }
    }
}

// 异步action  更新用户信息的任务
export const updateUser = user => {

    return async dispatch => {
        
        try{
            const response = await reqUpdateUser(user)  
            const result = response.data   // 后台返回的数据拿到了，如果成功code为1，失败code为0
            
            if(result.code === 0){  // 失败里面有个message属性
                dispatch(resetUser(result.message))
            }else {              // 成功里面有个data
                dispatch(receiveUser(result.data))
            }

       }catch(err){
             console.log("修改出错了",err);
       }
    }
}