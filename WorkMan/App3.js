
import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import Axios from './src/contents/js/myAxios'

import { MainNavigator, LoginNavigator } from './src/routes'

// 全局 axios 设置
GLOBAL.axios = Axios // eslint-disable-line
// 全局添加用户信息
GLOBAL.workmanUser = null // eslint-disable-line

export default class App extends Component {
  constructor () {
    super()

    this.state = {
      userInfo: ''
    }
  }

  async componentDidMount () {
    await this.getUserInfo()
    SplashScreen.hide()
  }

  async getUserInfo () {
    let userInfo = JSON.parse(await AsyncStorage.getItem('USER_INFO'))
    this.setState({userInfo})
    // 保存到全局
    workmanUser = userInfo // eslint-disable-line
  }

  render () {
    return (
      <View style={{flex: 1}}>
        { this.state.userInfo && this.state.userInfo.token ? <MainNavigator /> : <LoginNavigator />}
      </View>
    )
  }
}
