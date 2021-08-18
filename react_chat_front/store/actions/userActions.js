import {
    SET_USER_SUCCESS, SET_USER_ERROR, UPDATE_USER, LOGOUT

} from '../types'
import {axiosInstance} from "../../api";
import {setFullLoading, setInfoBox, setLoading} from "./simpleActions";
import {SUCCESS,ERROR} from '../../constants'
import Router from "next/router";

export const setUser = () => async dispatch => {

    await axiosInstance.get('/auth/users/me').then(async (response) => {

        await axiosInstance.get(`/api/v1/users/profile/${response.data.id}`).then(async (result) => {

            await dispatch({
                type: SET_USER_SUCCESS,
                payload: result.data
            })

        })
    }).catch(error => {

            if (error.response) {
                dispatch({
                    type: SET_USER_ERROR,
                    payload: {status: error.response.status, message: error.response.data.detail}
                })

            } else {
                dispatch({
                    type: SET_USER_ERROR,
                    payload: {error: error}
                })
            }

        }
    )


}
export const logout = () => async dispatch => {
    dispatch(setFullLoading(true))
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')

    dispatch({
        type: LOGOUT,
        payload: {}
    })
    await Router.push('/login')
    dispatch(setFullLoading(false))
}
// DOM — это независящий от платформы и языка программный интерфейс, позволяющий программам и скриптам получить доступ к содержимому HTML
export const updateUser = (id, params) => async dispatch => {
    dispatch(setLoading(true))
    await axiosInstance.put(`/api/v1/users/profile/${id}/`, params)
        .then((response) => {
            dispatch(setLoading(false))
            dispatch(setInfoBox(SUCCESS))
            dispatch({
                type: SET_USER_SUCCESS,
                payload: response.data
            })
        }).catch(error => {
            dispatch(setLoading(false))
            dispatch(setInfoBox(ERROR))
            if (error.response) {
                dispatch({
                    type: SET_USER_ERROR,
                    payload: error.response.data
                })

            } else {
                dispatch({
                    type: SET_USER_ERROR,
                    payload: {error: error}
                })
            }


        })
}