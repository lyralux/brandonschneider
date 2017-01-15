/**
 * Created by lvx on 1/10/17.
 */
import React, { Component, PropTypes } from 'react'
import './index.scss'

class Footer extends Component {
  static propTypes = {
    // routes : PropTypes.object.isRequired,
    // store  : PropTypes.object.isRequired
  }

  render () {
    return (
      <footer className='app-footer'>
        <div className='footer__logo'>
          <img src='/logo_white.png' />
        </div>
        <div className='content'>
          <div className='copyright'>
            <ul>
              <li />
              <li>Copyright © brandon j schneider 2017. All rights reserved.</li>
              <li />
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
