import {createStore, applyMiddleware} from 'redux'
import {persistStore} from 'redux-persist'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState = {}
const middleware = [thunk]
export const store = createStore(rootReducer, applyMiddleware(...middleware))
export const persistor = persistStore(store)
export default {store, persistor}