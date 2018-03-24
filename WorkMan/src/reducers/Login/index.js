let _state = {
    userInfo: {}
}

export default function (state = _state, action) {
    switch (action.type) {
        case 'LOGIN_SUCCESS_':
            return Object.assign({}, state, {
                userInfo: action.data
            })

        default:
            return state
    }
}