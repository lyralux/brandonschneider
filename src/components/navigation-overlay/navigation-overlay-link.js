/**
 * Created by lvx on 1/10/17.
 */
'use strict'

import React from 'react'
import classnames from 'classnames'

import './index.scss'

const NavigationOverlayLink = React.createClass({
  onClick (e) {
        // e.preventDefault();
    console.log('onclick')

    this.props.onClick && this.props.onClick()
  },
  render () {
    const { selected, children } = this.props
    const classes = classnames('navigation-overlay-link', {
      selected: selected
    })
    return <li className={classes}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { onClick: this.onClick })
      })}
    </li>
  }
})

export default NavigationOverlayLink
