import React, { Component } from 'react'
import { Switch,Route,Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import Cookies from 'js-cookie'
import {NavBar} from 'antd-mobile'

import {getUser} from '../../redux/actions'
import {getRedirectTo} from '../../utils'
import BossInfo from '../BossInfo/BossInfo'
import StaffInfo from '../StaffInfo/StaffInfo'
import Boss from '../Boss/Boss'
import Staff from '../Staff/Staff'
import Message from '../Message/Message'
import Personal from '../Personal/Personal'
import NotFound from '../../components/NotFound/NotFound'
import FooterBar from '../../components/FooterBar/FooterBar'

/*
  1. 实现自动登录
     1) 如果cookie中有userid，发送请求获取对应userid的数据，暂时不做任何显示
     2) 如果cookie中没有userid，跳转login进行登录
  2. 如果已经登录 如果请求根路径：
     1) 根据user的type和header来计算出一个重定向的路由路径，并自动重定向

*/

 class Main extends Component {

    // 保存4个子路由组件对象的数据
    navList = [
        {
            path:'/boss',
            component: Boss,
            title: '求职者列表',
            icon:'dashen',
            text:'大神'
        },
        {
            path:'/staff',
            component: Staff,
            title: '老板列表',
            icon:'laoban',
            text:'老板'
        },
        {
            path:'/message',
            component: Message,
            title: '消息列表',
            icon:'message',
            text:'消息'
        },
        {
            path:'/personal',
            component: Personal,
            title: '用户中心',
            icon:'personal',
            text:'个人'
        },
    ]
    
    componentDidMount(){
        // 登陆过(cookie有userid)，但关闭后再打开没有登录(redux管理的user没有_id) 发送请求获取对应的user
         const userid = Cookies.get('userid')
         const {_id} = this.props.user
         if(userid && !_id){
             console.log("发送请求获取用户信息");
             this.props.getUser()
         }

    }
    render() {
        const {user,location} = this.props
        const userid = Cookies.get('userid')

        // 在main这里统一检查，没有userid的直接跳转登录
        if(!userid){
            return <Redirect to='/login' />  // 如果没有userid的cookie。跳转登录
        }
        // 如果user没有_id，返回null 不作任何显示
        if(!user._id){
            return null
        }else{
            let path = location.pathname
            // 如果请求根路径，根据user的type和header计算出一个重定向的路径
            if(path === '/'){
                path = getRedirectTo(user.type,user.header)
                return <Redirect to={path} />
            }
        }


        const path = location.pathname  // 获取当前path
        const currentNav = this.navList.find(nav => path === nav.path)  // 匹配数组中的path

        return (
            <div>
               { currentNav ? <NavBar className="navbar">{currentNav.title}</NavBar> : null }
                <Switch>
                    {
                        this.navList.map(nav => <Route key={nav.path} path={nav.path} component={nav.component} />)
                    }
                    <Route path="/bossinfo" component={BossInfo} />
                    <Route path="/staffinfo" component={StaffInfo} />
                    <Route component={NotFound} />
                </Switch>

                { currentNav ? <FooterBar navList={this.navList} userType={user.type} /> : null }
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    { getUser }
)(Main)
