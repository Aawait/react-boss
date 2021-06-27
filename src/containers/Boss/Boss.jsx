
/* 老板主界面路由组件 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserList} from '../../redux/actions'
import UserList from '../../components/UserList/UserList'

class Boss extends Component {

    componentDidMount(){
        this.props.getUserList('大神')
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
)(Boss)
