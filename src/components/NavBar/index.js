/**
 * A navigation component
 *
 * Usage:
 *    <NavBar> 
 *      <NavItem to='/home' index={true} >Home</NavItem>
 *      <NavItem to='/about'>About</NavItem>
 *    </NavBar>
 *
 */
 
import React, { Component } from 'react'
import { Link, IndexLink, withRouter } from 'react-router'

import styles from './styles.scss'

class NavItem extends Component {
  render () {
    const { router } = this.props
    const { index, to, children, ...props } = this.props

    let isActive
    if( router.isActive('/',true) && index ) isActive = true
    else  isActive = router.isActive(to)

    return (
      <li className={isActive ? 'active' : ''}>
        <Link to={to} {...props}>{children}</Link>
      </li>
    )
  }
}
class NavBar extends Component {
  render(){
    return(
      <nav className="navbar navbar-default">
        <ul className="nav navbar-nav">
          {this.props.children}
        </ul>
      </nav>
    )
  }
}
NavItem = withRouter(NavItem)

export  {NavBar, NavItem}