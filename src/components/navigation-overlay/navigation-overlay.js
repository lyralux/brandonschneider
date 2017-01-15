/**
 * Created by lvx on 1/10/17.
 */
'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { closeModal } from 'store/navigation'
import classnames from 'classnames'
// import get from 'lodash/object/get';

import NavigationOverlayLink from './navigation-overlay-link'
import CloseButton from 'components/close-button'

const NavigationOverlay = React.createClass({
  onClickContent (event) {
    event.stopPropagation()
  },
  onClickClose () {
    let { dispatch } = this.props
    dispatch(closeModal())
  },
  renderNavigationOverlayLinks () {
    return get(this.props, 'pages', []).map(link => {
      return <NavigationOverlayLink
        key={link.id}
        url={link.slug === 'home' ? '/' : `/${link.slug}`}
        selected={link.slug === this.props.section}
            >
        {link.title}
      </NavigationOverlayLink>
    })
  },
  renderNavigationLinks () {
    let { children } = this.props
    return children.map(child => {
      let onClickHandler = child.props.onClick ? child.props.onClick : this.onClickClose
      console.log(child)
      return (
        <NavigationOverlayLink onClick={onClickHandler}>
          {child}
        </NavigationOverlayLink>
      )
    })
  },
  render () {
    return <nav className='navigation-overlay' onClick={this.onClickContent}>
      <CloseButton onClose={this.onClickClose} autoAnim={10} />
      <ul className='menu'>
        {this.renderNavigationLinks()}
      </ul>
    </nav>
  }
})

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(NavigationOverlay)
