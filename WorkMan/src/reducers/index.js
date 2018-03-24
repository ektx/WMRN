import { combineReducers } from 'redux'

import Main from './Main'
import Login from './Login'

const rootReducer = combineReducers({
    Login,
    Main
})

export default rootReducer