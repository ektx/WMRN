
import React from 'react'
import { Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

import MainScreen from './main'
import LoginScreen from '../screen/Login'
import { ChatScreen } from '../components/chat/App.js'
import IPScreen from '../screen/IPScreen'
import EventsScreen from '../screen/Events'

let Routes = {
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  Main: {
    screen: MainScreen
  },
  Events: {
    screen: EventsScreen
  },
  Chat: {
    screen: ChatScreen,
    navigationOptions: ({ navigation }) => {
      window.alert(JSON.stringify(navigation))
      const { state, setParams } = navigation
      const isInfo = state.params.mode === '信息'
      const { user } = state.params

      return {
        headerTitle: isInfo ? `${user}信息` : user,
        headerRight: (
          <Button
            title={isInfo ? '完成' : `${user}信息`}
            onPress={() => setParams({
              mode: isInfo ? 'none' : '信息'
            })}
          />
        )
      }
    }
  },
  IP: {
    screen: IPScreen
  }
}

/*
    默认从登录页面开始
*/
export const LoginNavigator = StackNavigator(Routes, {
  initialRouteName: 'Login',
  headerMode: 'screen'
})

/*
    从主页开始
*/
export const MainNavigator = StackNavigator(Routes, {
  initialRouteName: 'Main',
  headerMode: 'screen'
})

// const defaultGetStateForAction = MainNavigator.router.getStateForAction

// MainNavigator.router.getStateForAction = (action, state) => {

//   return defaultGetStateForAction(action, state)
// }
