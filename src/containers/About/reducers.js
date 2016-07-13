/*
 * About reducers
 *
 */

import {combineReducers} from 'redux'

const reducer = combineReducers({
	isFetching:(state=false, action)=>{
		if(action.type=='REQUEST_LIKE'){
            return true
        }
        return false
	},
 	count:(state=0, action)=>{
        if(action.type=='RECEIVE_LIKE'){
            return state+1
        }
        return state
    }
})

export default reducer