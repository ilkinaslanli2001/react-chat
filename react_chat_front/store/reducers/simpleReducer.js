import {
    FULL_LOADING_FALSE,
    FULL_LOADING_TRUE,
    LOADING_FALSE,
    LOADING_TRUE,
    SET_INFO_BOX
} from '../types'


const initialState = {
    loading: false,
    full_loading: false,
    info_box_type: 0
}

export const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INFO_BOX:

            return {
                ...state,
                info_box_type: action.payload
            }
        case LOADING_TRUE:

            return {
                ...state,
                loading: true
            }
        case LOADING_FALSE:
            return {
                ...state,
                loading: false
            }
        case FULL_LOADING_TRUE:
            return {
                ...state,
                full_loading: true
            }
        case FULL_LOADING_FALSE:
            return {
                ...state,
                full_loading: false
            }
        default:
            return state
    }
}