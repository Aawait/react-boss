/*登录路由组件*/
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../../redux/actions'


import Logo from '../../components/Logo/Logo'

import {
    NavBar,
    InputItem,
    List,
    WingBlank,
    WhiteSpace,
    Button,
} from 'antd-mobile'


 class Login extends Component {

    state = {
        username:'',
        password:''
    }
    
    handleChange = (input,value) => {
       this.setState({
           [input]:value
       })
    }

    submit = () => {
        // 登录提交
        this.props.login(this.state)
    }

    render() {
        const {history,user} = this.props
        // 登录或注册过 直接跳到主页面
        if(user.redirectTo){
           return <Redirect to={user.redirectTo} />
        }
        return (
            <div>
                <NavBar>BOSS直聘</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                      {user.message ? <div style={{color:'#f00',textAlign:'center',padding:'5px 0'}}>{user.message}</div> : null}
                      <InputItem onChange={val => {this.handleChange('username',val)}} placeholder="请输入用户名">用户名</InputItem>
                      <InputItem onChange={val => {this.handleChange('password',val)}} type="password" placeholder="密码">密码</InputItem>
                      <WingBlank>
                          <Button onClick={this.submit} type="primary" style={{marginTop:'15px'}}>登录</Button>
                          <Button onClick={ ()=> {history.push('/register')} } type="primary" style={{marginTop:'15px'}}>还没有账号</Button>
                      </WingBlank>
                      <WhiteSpace />
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    {login}
)(Login)
