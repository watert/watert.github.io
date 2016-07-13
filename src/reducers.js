/*
 * global reducer
 *
 */

import {combineReducers} from 'redux'
import {reducer as homeReducer} from 'containers/Home'
import {reducer as aboutReducer} from 'containers/About'

const reducer = combineReducers({
	home: homeReducer, 
	about: aboutReducer
})

export default reducer