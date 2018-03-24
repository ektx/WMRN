
import { TabNavigator } from 'react-navigation'

import MyScreen from '../screen/My'
import EventTypeScreen from '../screen/EventTypes'

const HomeScreen = TabNavigator({
  Home: {
    screen: EventTypeScreen
  },
  List: {
    screen: MyScreen
  }
}, {
  lazy: true,
  tabBarOptions: {
    activeTintColor: '#f65f54'
  },
  // tabBarOptions: {
  //   initialRouteName: 'Home'
  // }
})

export default HomeScreen
