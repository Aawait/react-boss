
/* 个人中心界面路由组件 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Result,List,WhiteSpace,Button,WingBlank,Modal} from 'antd-mobile'
import Cookies from 'js-cookie'
import {resetUser} from '../../redux/actions'

const Item = List.Item
const Brief = Item.Brief

class Personal extends Component {


    signOut = () => {
        try{
            Modal.alert('退出','确定退出登录吗？',[
                {text:'取消'},
                {
                    text:'确定',
                    onPress: ()=>{
                        Cookies.remove('userid')  // 删除cookie的userid
                    
                        this.props.resetUser() // 并且把redux保管的user信息初始化

                    }
                }
            ])
        }catch(err){
            console.log("err");
        }
    }

    render() {
        const {username,header,company,post,salary,info} = this.props.user
        return (
            <div>
                <WingBlank>
                   <WhiteSpace />
                    <Result 
                    img= { <img src={require(`../../assets/images/${header}.png`).default} alt="头像" />}
                    title= {username}
                    message= {company}
                    /> 
                    
                        <List renderHeader={()=> '相关信息'}>
                        <Item>
                            <Brief>职位：{post}</Brief>
                        </Item>
                        <Item>
                            <Brief>简介：{info}</Brief>
                        </Item>

                        {salary ?<Item><Brief>薪资：{salary}</Brief></Item> : null}      
                        
                        </List>
                        <WhiteSpace />
                        
                            <WingBlank>
                                <Button type="warning" onClick={this.signOut}>退出登录</Button>
                            </WingBlank>
              
                </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    {resetUser}
)(Personal)
