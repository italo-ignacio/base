import axios from 'axios'

export const Api = axios.create({
    baseURL: 'http://10.107.131.79:3330/api/v2',
})

export default Api
