/**
 * Created by lvx on 1/10/17.
 */
import React from 'react'
import classnames from 'classnames'

import './index.scss'

class EntranceTransition extends React.Component {
  componentDidMount () {
    this.timeout = setTimeout(() => {
      this.node.classList.add('show')
    }, 10)
  }
  componentWillUnmount () {
    clearTimeout(this.timeout)
  }
  render () {
    const classes = classnames('entrance-transition', this.props.className)
    return <div ref={(div) => this.node = div} className={classes}>{this.props.children}</div>
  }
};

export default EntranceTransition
