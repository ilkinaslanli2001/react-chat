import {
    CLEAR_OTHER_USER,

    SET_OTHER_USER

} from '../types'


export const setOtherUser = (data) => async dispatch => {

    dispatch({
        type: SET_OTHER_USER,
        payload: data
    })

}
export const clearOtherUser = () => async dispatch => {
    dispatch({
        type: CLEAR_OTHER_USER,
    })
}

