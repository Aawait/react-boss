import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavBar,InputItem,TextareaItem,Button,WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'
import {updateUser} from '../../redux/actions'

import HeadSelect from '../../components/HeadSelect/HeadSelect'

 class BossInfo extends Component {
     state = {
        header: '', // 头像
        post: '' ,  // 职位
        info: '' ,  // 个人或职位简介
        company: '',  // 公司名称
        salary:''    // 月薪
     }

     handleChange = (name,value) => {
        this.setState({
            [name] : value
        })
     }

     // 传递给子组件设置头像
     setHeader = icon => {
         this.setState({header:icon})
     }

     submit = () => {
         this.props.updateUser(this.state)
     }

    render() {
        // 判断信息是否完善，完善后直接跳转
        const {header,type} = this.props.user  // 假设头像存在，证明他信息完善了
        if(header){
            const path = type === '老板' ? '/boss' : 'staff'
            return <Redirect to={path} />
        }
        return (
            <div>
                <NavBar children="BOSS信息完善" />
                <HeadSelect setHeader={this.setHeader} />
                <InputItem placeholder="请输入职位信息" onChange={val => this.handleChange('post',val)}>招聘职位</InputItem>
                <InputItem placeholder="请输入公司名称" onChange={val => this.handleChange('company',val)}>公司名称</InputItem>
                <InputItem placeholder="请输入职位薪资" onChange={val => this.handleChange('salary',val)}>职位薪资</InputItem>
                <TextareaItem 
                title="职位要求" 
                placeholder="请输入职位要求"
                rows={2}
                onChange={val => this.handleChange('info',val)}
                   />
                   <WingBlank>
                        <Button type="primary" style={{marginTop:'10px'}} onClick={this.submit}>保存</Button>
                   </WingBlank>
            </div>
        )
    }
}

export default connect(
    state => ({user:state.user}),
    {updateUser}
)(BossInfo)
