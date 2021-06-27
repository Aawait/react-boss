import React, { Component,Fragment } from 'react'
import PropTypes from 'prop-types'
import {WhiteSpace,WingBlank,List,Card} from 'antd-mobile'

const {Header,Body} = Card

export default class UserList extends Component {

    static propTypes = {
        userList: PropTypes.array.isRequired
    }

    render() {
        const {userList} = this.props
        return (
            <WingBlank style={{marginBottom:60}}>
                {
                    userList.map(user => (
                        <Fragment key={user._id}>
                            <WhiteSpace />
                            <Card>
                                <Header
                                extra={user.username} 
                                thumb={ require(`../../assets/images/${user.header}.png`).default }
                                />
                                <Body>
                                    <List.Item>职位：{user.post}</List.Item>
                                    { user.company ? <List.Item>公司：{user.company}</List.Item> : null }
                                    { user.salary ? <List.Item>月薪：{user.salary}</List.Item> : null }
                                    <List.Item>描述：{user.info}</List.Item>
                                </Body>
                            </Card>
                         </Fragment>
                    ))
                }
            </WingBlank>
        )
    }
}


