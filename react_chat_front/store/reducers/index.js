import {combineReducers} from 'redux'
import {simpleReducer} from './simpleReducer'
import {userReducer} from './userReducer'
import {otherUserReducer} from './otherUserReducer'
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['userReducer']
}
const rootReducer = combineReducers({simpleReducer, userReducer, otherUserReducer})
export default persistReducer(persistConfig, rootReducer)