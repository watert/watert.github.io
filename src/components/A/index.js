/**
 * A link to a certain page, an anchor tag
 */

import React, { Component, PropTypes } from 'react';

import styles from './styles.scss';

class A extends Component {
  render(){
  	let {props} = this
    return (
      <a className={ props.className || styles.link} { ...props } />
    )
  }
}

A.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default A;
