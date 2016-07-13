/*
 * Home reducers
 *
 */

import {combineReducers} from 'redux'

const reducer = combineReducers({
    data:(state=[], action)=>{
        if(action.type=='SET_DATA'){
            return action.payload.data;
        }
        return state;
    },
    pageInfo:(state={}, action)=>{
        if(action.type=='SET_DATA' && action.payload.pageInfo){
            return action.payload.pageInfo
        }
        return state;
    }
});

export default reducer