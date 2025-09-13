import {legacy_createStore as createStore} from "redux"
import itemReducer from './items/itemReducer'
import {thunk} from 'redux-thunk'
import { applyMiddleware } from "redux"
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(itemReducer,composeWithDevTools(applyMiddleware(thunk)))

export default store;