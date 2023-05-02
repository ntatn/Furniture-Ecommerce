
import Vuex from 'vuex';
import { axiosbase, axiosdefault } from '@/interceptors/axios-base.js';


export default new Vuex.Store({
    state: {
        accessToken: localStorage.getItem('access_token'),
        isAdmin: localStorage.getItem('role'),
        isLoggedIn: false,
    },
    getters: {
        isLoggedIn: (state) => !!state.accessToken,
        isAdmin: (state) => state.isAdmin
    },
    mutations: {
        updateLocalStorage (state, {access, userId, role}) {
            localStorage.setItem('access_token', access)
            localStorage.setItem('user_id', userId)
            localStorage.setItem('role', role)
            state.isAdmin = role
            state.accessToken = access
        },
        destroyToken(state) {
            state.accessToken = null
            state.userId = null
        },
    },
    actions: {
        registerUser (data) {
            return new Promise ((resolve, reject) =>{
                axiosbase.post('/user/signup', {
                    name: data.name,
                    email: data.email,
                    password: data.password

                }).then(response =>{
                    resolve(response)
                }).catch(err =>{
                    reject(err)
                })
            })
        },
        loginUser(context, data){
            return new Promise((resolve, reject) =>{
                axiosbase.post('/user/login', {
                    email: data.email,
                    password: data.password
                })
                .then(response => {
                    context.commit('updateLocalStorage', {access: response.data.metadata.token.accessToken, userId: response.data.metadata.user._id, role: response.data.metadata.user.roles})
                    resolve()
                })
                .catch(err =>{
                    reject(err)
                })
            })
        },
        logoutUser(context){
            if(context.getters.isLoggedIn){
                return new Promise((resolve, reject) =>{
                    axiosdefault.post('/user/logout')
                    .then(response => {
                        localStorage.removeItem('access_token')
                        localStorage.removeItem('user_id')
                        resolve(response)
                    })
                    .catch(err => {
                        reject(err)
                    })
                })
            }
        }
    }
})
