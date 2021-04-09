const axios = require('axios')
axios.defaults.baseURL = 'http://localhost/api/v1'

const post = async (url, payload) => {
    return await axios.post(url, payload)
}
const get = async (url) => {
    return await axios.get(url)
}

export { post, get }
