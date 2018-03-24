let _state = {
    userInfo: {}
}

const mainReducer = (state = _state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
           return Object.assign({}, state, {
               userInfo: action.data
           })
        default:
            return state
    }
}

export default mainReducer