import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import BossInfo from '../BossInfo/BossInfo'
import StaffInfo from '../StaffInfo/StaffInfo'

export default class Main extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/bossinfo" component={BossInfo} />
                    <Route path="/staffinfo" component={StaffInfo} />
                </Switch>
            </div>
        )
    }
}