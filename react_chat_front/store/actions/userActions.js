import {
    SET_USER_SUCCESS, SET_USER_ERROR, UPDATE_USER, LOGOUT

} from '../types'
import {axiosInstance} from "../../api";


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
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')

    dispatch({
        type: LOGOUT,
        payload: {}
    })
}

export const updateUser = (id, params) => async dispatch => {

    axiosInstance.put(`/api/v1/users/profile/${id}/`, params)
        .then((response) => {

            dispatch({
                type: SET_USER_SUCCESS,
                payload: response.data
            })
        }).catch(error => {

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