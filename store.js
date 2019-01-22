import reducer from "./src/reducers/reducer";
import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));