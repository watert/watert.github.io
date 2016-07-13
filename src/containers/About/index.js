/*
 * About Page
 *
 */

import React, { Component } from 'react';  

import A from 'components/A'

import reducer from './reducers'
import {like} from './actions'

import './style.scss'

//define about view
class AboutView extends Component {
    render(){
        let {isFetching, count, like} = this.props
        const onClickAdd = ()=> like()
        return (<div className='aboutview'>
            <h3>About View</h3>
            <div className='like'>
                <pre><A className='link' onClick={onClickAdd} href='javascript:void(0);'>Like</A> : {isFetching ? 'Loading...' : count}</pre>
            </div>
        </div>)
    }
}

// connecting
import {connect, Provider} from 'react-redux'
const mapStateToProps = (state, props)=>{ 
    return state.about
}
const mapDispatchToProps = (dispatch)=>{
    return { 
        // like: ()=> like()(dispatch)  //normal, like is async action
        like: ()=> dispatch(like()) //with thunk, applyMiddleware in src/configureStore.js

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutView)
export {reducer, AboutView}