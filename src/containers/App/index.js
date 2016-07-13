/*
 * App Entrance
 *
 */

import React, { Component } from 'react';  

import {NavBar, NavItem} from 'components/NavBar'
import Footer from 'components/Footer'

import './style.scss'

class MainView extends Component {
    render(){
        return (<div className='mainview'>
            <h1>Main View</h1>
            <NavBar>
                <NavItem to='/home' index={true} >Home</NavItem>
                <NavItem to='/about'>About</NavItem>
            </NavBar>
            {this.props.children}
            <Footer></Footer>
        </div>)
    }
}

export default MainView