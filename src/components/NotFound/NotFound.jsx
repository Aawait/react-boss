
/* 404找不到的界面 */
import React, { Component } from 'react'
import {Button} from 'antd-mobile'
export default class NotFound extends Component {
    render() {
        return (
            <div>
                <h2>您访问的界面不存在</h2>
                <Button type="primary" onClick={()=> this.props.history.replace('/')}>点击回到首页</Button>
            </div>
        )
    }
}
