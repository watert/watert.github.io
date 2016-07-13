/*
 * Home Page
 *
 */

import React, { Component } from 'react';  
import {Link} from 'react-router'

import Button from 'components/Button'

import reducer from './reducers'
import {setPage} from './actions'

import './style.scss'

// define home view
class HomeView extends Component {
    componentDidMount(){
        this.props.setPage(0)
    }
    render(){
        let {data, pageInfo, setPage} = this.props
        const onClickNext = ()=> setPage(pageInfo.page+1)
        return (<div className='homeview'>
            <h3>Home View</h3>
            <div id='pagination'>
                <pre>data: {data.join(',')}</pre>
                <pre>page: {pageInfo.page} /  {pageInfo.total}</pre>
                <Button className='btn next-btn' onClick={onClickNext}>next</Button>
                <br/>
            </div>
        </div>)
    }
}

// connecting
import {connect, Provider} from 'react-redux'
const mapStateToProps = (state, props)=>{ 
    return state.home
}
const mapDispatchToProps = (dispatch)=>{
    return { 
        setPage: (page)=> dispatch(setPage(page))

    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
export {reducer, HomeView}

