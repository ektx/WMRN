
import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'

import * as Actions from '../../actions/login'
import Axios from '../../contents/js/myAxios'
import { MainNavigator, LoginNavigator } from '../../routes'

// 全局 axios 设置
GLOBAL.axios = Axios
// 全局添加用户信息
GLOBAL.workmanUser = null

class App extends Component {
    constructor () {
        super()

        this.state = {}
    }

    async componentDidMount () {
        await this.getUserInfo()
    }

    async getUserInfo () {
        // 获取本地数据
        let userInfo = JSON.parse(await AsyncStorage.getItem('USER_INFO'))

        // 保存到 store
        this.props.sendToActions( userInfo )

        SplashScreen.hide()
    }

    render () {
        return (
            <View style={{flex: 1}}>
                { this.props.userInfo && this.props.userInfo.token ? <MainNavigator /> : <LoginNavigator />}
            </View>
        )
    }
}

function mapStateToProps (state, props) {
    return {
        userInfo: state.Main.userInfo,
    }
}

function mapDispatchToProps (dispatch) {
    return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)