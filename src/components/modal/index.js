/**
 * Created by lvx on 1/10/17.
 */
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import { closeModal } from 'store/navigation'

import './index.scss';


class Modal extends Component {
  constructor(props){
    super(props);

    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    let {dispatch} = this.props;
    dispatch(closeModal());
    // dispatch(closeModal());
  }

  render () {
    const { className, belowHeader, children } = this.props;
    const classes = classnames('modal', className.replace('shown',''), {
      'below-header': belowHeader
    });
    return (
      <div
      className={classes}
      onClick={this.onClick}
      >
        {children}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps)(Modal)
