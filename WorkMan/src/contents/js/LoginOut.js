import { AsyncStorage, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation'

/**
 * 退出功能
 * @param {Objet} navigation 跳转属性
 */
export default function LoginOut (navigation) {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName: 'Login' })
        ]
    })

    AsyncStorage.removeItem('USER_INFO').then(mes => {
        navigation.dispatch(resetAction)
        
    }).catch(err => Alert.alert(err))
}
