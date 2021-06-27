
/* 求职者主界面路由组件 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/actions'
import UserList from '../../components/UserList/UserList'

class Staff extends Component {
    componentDidMount(){
      this.props.getUserList('老板')
    }
    render() {
        return (
            <div>
                <UserList userList={this.props.userList} />
            </div>
        )
    }
}

export default connect(
    state => ({userList:state.userList}),
    {getUserList}
)(Staff)
