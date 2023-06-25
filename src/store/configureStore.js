import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import dataReducer from '../reducer/dataReducer'

const configureStore = () => {
    const store = legacy_createStore(
        combineReducers({
            data: dataReducer,
        }), applyMiddleware(thunk))
    return store
}
export default configureStore
