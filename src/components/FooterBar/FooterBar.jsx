import React, { Component } from 'react'
import {TabBar} from 'antd-mobile'
import PropTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

class FooterBar extends Component {

    static propTypes = {
        navList: PropTypes.array.isRequired
    }

    render() {
        const { navList,location,history,userType } = this.props
        const path = location.pathname

        const hideType = userType === '老板' ? '老板' : '大神'
        const newNavList = navList.filter(nav => {
            return nav.text !== hideType
        })

        return (
            <TabBar tintColor="#45b97c">
                {
                    newNavList.map(nav => (
                    <TabBar.Item
                        key = {nav.path}
                        title = {nav.text} 
                        icon = {{ uri: require(`./images/${nav.icon}.png`).default }}
                        selectedIcon = {{ uri: require(`./images/${nav.icon}-selected.png`).default }}
                        selected = {path === nav.path}
                        onPress = { ()=> history.replace(nav.path) }
                        dot = {nav.path === '/message'}
                         />))
                }
                
            </TabBar>
        )
    }
}

export default withRouter(FooterBar) // 包装成路由对象，props就有了history，location，match
