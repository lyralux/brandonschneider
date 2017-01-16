/**
 * Created by brand on 1/15/2017.
 */
import React from 'react'
import { get } from 'lodash'
import SkillListItem from './SkillListItem'

import './index.scss'

class SkillsList extends React.Component {
  renderSkills () {
    const { skill: { skills }, skillsCategory } = this.props
    // let skills = [1, 2, 3, 4, 5]
    return skills.map(item => {
      return <SkillListItem skill={item} className={skillsCategory} />
    })
  }
  render () {
    const { skill, skillsCategory, id } = this.props
    const skillsDescription = get(skill, 'desc')
    const classes = 'skills-list selected'

    return (
      <div className={classes}>
        <h3>{skillsCategory}</h3>
        <div className='tab-content' id={`tab-content-${id}`}>
          <div className='skills-info'>
            <div className='info' style={{ backgroundColor: skill.color }}>
              <p className='excerpt'>{get(skill, 'title')}</p>
              <p className='studio-blurb' dangerouslySetInnerHTML={{ __html: skillsDescription }} />
            </div>
            <div className='skills-items'>
              {this.renderSkills()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SkillsList
