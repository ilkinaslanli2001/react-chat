import {
    CLEAR_OTHER_USER,
    SET_OTHER_USER

} from '../types'


const initialState = {
    other_user: {},
}

export const otherUserReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_OTHER_USER :

            return {
                ...state,
                other_user: action.payload,
            }

        case CLEAR_OTHER_USER:
            return {
                ...state,
                other_user: {}
            }

        default:
            return state
    }
}