/* 包含了n个接口请求的函数模块 函数返回的是promise */
import ajax from './ajax'

// 注册接口
export const reqRegister = user => ajax('/register',user,'POST')

// 登录接口
export const reqLogin = ({username,password}) => ajax('/login',{username,password},'POST')

// 更新用户接口
export const reqUpdateUser = user => ajax('/update',user,'POST')

// 获取用户信息接口
export const reqGetUser = () => ajax('/user')

// 获取用户列表接口
export const reqUserList = type => ajax('/userlist',{type})
