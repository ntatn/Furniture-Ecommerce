import axios from "axios"
// import store from '../store/store.js'

const APIUrl = 'http://localhost:3000/api/v1'

const axiosbase = axios.create({
    baseURL: APIUrl,
    headers: {
        
        contentType: 'application/json'
    }
})
const axioslogout = axios.create({
    baseURL: APIUrl,
    headers: {
        'x-client-id': localStorage.getItem('user_id'),
        Authorization: localStorage.getItem('access_token')
    }
})



export {axiosbase, axioslogout}