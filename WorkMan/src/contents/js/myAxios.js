
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:9085'

// 请求自动添加 token 认证
Axios.interceptors.request.use(
	config => {
		return config
	},
	err => {
		return Promise.reject(err)
	}

)

Axios.interceptors.response.use(
    res => {
		if (res.data.code === 10000) {
			return Promise.reject(res.data)
		} else {
			return res.data.data
		}
    },
    err => {
        return Promise.reject(err)
    }
)

export default Axios
