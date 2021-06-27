import React, { Component } from 'react'
import {connect} from 'react-redux'
import {NavBar,InputItem,TextareaItem,Button,WingBlank} from 'antd-mobile'
import {Redirect} from 'react-router-dom'

import {updateUser} from '../../redux/actions'
import HeadSelect from '../../components/HeadSelect/HeadSelect'

 class StaffInfo extends Component {

    state = {
        header:'',
        post:'',
        info: ''
    }

    handleChange = (name,value) => {
       this.setState({
           [name] : value
       })
    }

    setHeader = header => {
        this.setState({header})
    }

    submit = () => {
        this.props.updateUser(this.state)
    }

    render() {
        const {header,type}  = this.props.user
        if(header){
            const path = type === '大神' ? '/staff' : '/boss'
            return <Redirect to={path} />
        }
        return (
            <div>
                <NavBar>求职者信息完善</NavBar>
                    <HeadSelect setHeader={this.setHeader} />
                    <InputItem placeholder="请输入求职岗位" onChange={val => this.handleChange('post',val)}>求职岗位</InputItem>
                    <TextareaItem title="个人介绍" placeholder="请输入个人介绍" rows={3} onChange={val => this.handleChange('info',val)} />
                    <WingBlank>
                       <Button type="primary" style={{margin:'20px 0'}} onClick={this.submit}>保存</Button>
                   </WingBlank> 
            </div>
        )
    }
}

export default connect(
    // state ===>  {user:{xxx:xxx,yyy:yyy...}}
    state => ({user:state.user}),
    {updateUser}
)(StaffInfo)
