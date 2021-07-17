import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-think'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({})

const initialState = {}

const store = createStore(reducer, initialState)

