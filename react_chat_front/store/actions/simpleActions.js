import {
    FULL_LOADING_FALSE,
    FULL_LOADING_TRUE,
    LOADING_FALSE,
    LOADING_TRUE,

} from '../types'

const initialState = {
    loading: false,
}


export const setLoading = (loadingState) => async dispatch => {

    dispatch({
        type: loadingState ? LOADING_TRUE : LOADING_FALSE,
    })
}
export const setFullLoading = (loadingState) => async dispatch => {

    dispatch({
        type: loadingState ? FULL_LOADING_TRUE : FULL_LOADING_FALSE,
    })
}