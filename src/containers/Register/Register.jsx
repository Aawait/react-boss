/* 注册路由组件*/
import React, { Component } from 'react'

import {connect} from 'react-redux'
import { Redirect} from 'react-router-dom'

import {register} from '../../redux/actions'

import Logo from '../../components/Logo/Logo'
import {
    NavBar,
    InputItem,
    List,
    WingBlank,
    WhiteSpace,
    Radio,
    Button,
    Flex,
} from 'antd-mobile'


 class Register extends Component {
    state = {
        username: '',
        password: '',
        password2: '',
        type: '大神'
    }

    handleChange = (input,val) => {
       this.setState({
           [input]:val
       })
    }

    submit =  () => {

      this.props.register(this.state)
    }


    render() {
        const {type} = this.state
        const {history,user} = this.props

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
                      <InputItem onChange={val => {this.handleChange('password2',val)}} type="password" placeholder="确认密码">确认密码</InputItem>
                      <List.Item align="middle">
                      <Flex>
                          <Flex.Item style={{width:'85px',marginRight:'5px'}}>用户类型</Flex.Item>
                          <Flex.Item ><Radio checked={type === '大神'} onChange={val => {this.handleChange('type','大神')}} style={{margin:'0 5px 0 0'}} />大神 </Flex.Item>
                          <Flex.Item ><Radio checked={type === '老板'} onChange={val => {this.handleChange('type','老板')}} style={{margin:'0 5px 0 0'}} />老板 </Flex.Item>
                      </Flex>
                      </List.Item>
                      <WingBlank>
                          <Button onClick={this.submit} type="primary" style={{marginTop:'15px'}}>注册</Button>
                          <Button onClick={()=>{ history.replace('/login') }} type="primary" style={{marginTop:'15px'}}>已有账号</Button>
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
    {register}
)(Register)