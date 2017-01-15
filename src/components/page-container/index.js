/**
 * Created by lvx on 1/10/17.
 */
import React from 'react'

export const PageContainer = (props) => {
  const { children, transitionState } = props
  const classNames = 'page-container ' + props.extraClasses
  return (
    <div className={classNames}>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { transitionState: transitionState })
      })}
    </div>
  )
}

export default PageContainer
