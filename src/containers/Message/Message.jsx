
/* 消息主界面路由组件 */
import React, { Component } from 'react'
import {connect} from 'react-redux'

class Message extends Component {
    render() {
        return (
            <div>
                message...
            </div>
        )
    }
}

export default connect(
    state => ({})
)(Message)
