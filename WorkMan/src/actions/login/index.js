
export function sendToActions (data) {
    return dispatch => {
        // 请求中
        dispatch({
            type: 'LOGIN_SUCCESS',
            data
        })

    }
}

function logining () {
    return {
        type: 'LOGIN_IN_LOADING'
    }
}