/*
 * Global Store
 *
 */

import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './reducers'

import thunk from 'redux-thunk'

const enhancer = compose(
	//middleware before devTools
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default function configureStore(initialState) {
	const store = createStore(rootReducer, initialState, enhancer)
	return store
}