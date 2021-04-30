const axios = require('axios')
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
// Add a request interceptor
axios.interceptors.request.use(
    function (config) {
        config.data = {
            ...config.data,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    function (response) {
        console.log('resp: ')
        console.log(response)
        const { data } = response
        if (data && data.data && data.data.token) {
            const {
                access_token,
                expires_in,
                refresh_token,
                token_type,
            } = data.data.token
            localStorage.setItem('access_token', access_token)
            localStorage.setItem('access_token_expires_in', expires_in)
            localStorage.setItem('refresh_token', refresh_token)
            localStorage.setItem('token_type', token_type)
        }
        return response
    },
    function (error) {
        const { status, data } = error.response
        let inferedMsg = 'Something Went Wrong'
        if (data) {
            const { exception } = data
            if (exception && exception.includes('InvalidLoginCredentials')) {
                inferedMsg = 'Invalid User Or Password'
            }
        }
        return Promise.reject({ status, data, inferedMsg })
    }
)
export default axios
