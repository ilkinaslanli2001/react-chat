import {
    SET_USER_SUCCESS, SET_USER_ERROR, LOGOUT, UPDATE_USER

} from '../types'
import {error} from "next/dist/build/output/log";


const initialState = {

    user: {},
    errors:{}

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_SUCCESS :

            return {
                ...state,
                user: action.payload,
                errors: {}
            }

        case SET_USER_ERROR:
            return {
                ...state,
                errors: action.payload,
                user: {}
            }
        case  LOGOUT:

            return {
                ...state,
                user: action.payload
            }

        case UPDATE_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state
    }
}