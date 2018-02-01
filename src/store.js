import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'

export default ( initialState ) => {
	return createStore( rootReducer, applyMiddleware( logger ) )
}
