/**
 * Created by brand on 1/16/2017.
 */
import React from 'react'
import classnames from 'classnames'

const SkillListItem = (props) => {
  const classes = 'skill-list-item content'
  const { skill, color, className } = props
  const progressClass = classnames('progress', className)

  return (
    <div className={classes}>
      <p className='title is-5'>{skill.title}</p>
      <span className='subtitle is-6 is-pulled-right'>{skill.exp}{' '}{'years'}</span>
      <progress className={progressClass} value={skill.val} max='100'>{skill.val}%</progress>
    </div>
  )
}

export default SkillListItem
