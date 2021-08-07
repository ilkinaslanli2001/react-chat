import axios from 'axios';

import Router from "next/router";


const BASE_URL = 'http://127.0.0.1:8000'


export const axiosInstance = axios.create({baseURL: BASE_URL})

axiosInstance.interceptors.request.use(
    config => {

        const token = localStorage.getItem('access')
        if (token) {
            config.headers['Authorization'] = 'JWT ' + token;
        }

        return config;
    },
    error => {
        Promise.reject(error)
    });

axiosInstance.interceptors.response.use((response) => {
    return response
}, function (error) {
    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url ===
        `/auth/jwt/refresh/`) {
        Router.push('/login');
        return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {

        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refresh')
        return axiosInstance.post('/auth/jwt/refresh/',
            {
                "refresh": refreshToken
            })
            .then(res => {
                if (res.status === 200) {
                    localStorage.setItem('access', res.data.access)
                    axiosInstance.defaults.headers.common['Authorization'] = 'JWT ' + res.data.access;
                    return axiosInstance(originalRequest);
                } else Router.push('/login');
            })
    }
    return Promise.reject(error);
});


export const login = async (params) => {
    return new Promise(async (resolve, reject) => {
        await axios.post(`${BASE_URL}/auth/jwt/create/`, params).then(async response => {

            localStorage.setItem('refresh', response.data.refresh)
            localStorage.setItem('access', response.data.access)
            resolve({status: response.status})
        }).catch(error => {
            reject({status: error.response.status, message: error.response.data.detail})
        })
    })
}

export const register = async (params) => {
    return new Promise(async (resolve, reject) => {
        await axios.post(`${BASE_URL}/auth/users/`, params).then(async response => {
            resolve({status: response.status})
        }).catch(error => {
            reject({status: error.response.status, errors: error.response.data})
        })
    })

}
