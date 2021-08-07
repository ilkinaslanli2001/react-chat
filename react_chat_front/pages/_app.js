import '../styles/globals.css'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import {store, persistor} from '../store/store'
import {PersistGate} from 'redux-persist/integration/react'


function MyApp({Component, pageProps}) {
    return <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
        </PersistGate>
    </Provider>
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)
export default wrapper.withRedux(MyApp)
