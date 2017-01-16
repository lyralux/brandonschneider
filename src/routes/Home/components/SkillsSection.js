/**
 * Created by brand on 1/15/2017.
 */
import React, { Component, PropTypes } from 'react'
import { get, map, kebabCase } from 'lodash'
import spannify from 'lib/spannify'
import classnames from 'classnames'
import SkillsList from 'components/skills-list'
import './SkillsSection.scss'

const skillsData = {
  'front-end': {
    title: 'Front-End',
    desc: 'I have extensive experience with HTML/CSS, Responsive design patterns, JavaScript libraries/frameworks (Backbone.JS, React, jQuery, Angular), RESTful APIs and web services, Git and Version Control, Frontend frameworks (Bootstrap, Foundation), Cross-Browser Development, and testing/debugging. My current focus is on React/Redux.',
    color: '#14C04D',
    skills: [
      {
        title: 'HTML5/CSS3',
        exp: 8,
        val: 95
      },
      {
        title: 'JavaScript (Backbone.JS, React)',
        exp: 5,
        val: 90
      },
      {
        title: 'RESTful APIs/Web Services',
        exp: 5,
        val: 80
      },
      {
        title: 'Responsive & Mobile Design',
        exp: 6,
        val: 88
      }
    ]
  },
  'back-end': {
    title: 'Back-End',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique eros, et varius enim. Etiam eget varius diam, vel imperdiet eros. Aliquam turpis diam, ultrices ut ornare eu, iaculis.',
    color: '#009CF3',
    skills: [
      {
        title: 'PHP',
        exp: 5,
        val: 85
      },
      {
        title: 'Relational Databases (MySQL, PostgreSQL)',
        exp: 5,
        val: 80
      },
      {
        title: 'MVC pattern',
        exp: 5,
        val: 80
      },
      {
        title: 'Data Structures and Algorithms',
        exp: 5,
        val: 85
      }
    ]
  },
  'personality': {
    title: 'Personality',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id tristique eros, et varius enim. Etiam eget varius diam, vel imperdiet eros. Aliquam turpis diam, ultrices ut ornare eu, iaculis.',
    color: '#F9615B',
    skills: [
      {
        title: 'Technical capability',
        exp: 26,
        val: 100
      },
      {
        title: 'Superior attention to detail',
        exp: 26,
        val: 100
      },
      {
        title: 'Adaptability, quickly learn new technologies',
        exp: 26,
        val: 100
      },
      {
        title: 'Curiosity',
        exp: 26,
        val: 100
      }
    ]
  }
}

class SkillsSection extends Component {
  static propTypes = {
    className: PropTypes.string
  }
  constructor (props) {
    super(props)
    this.renderSkillsTabs = this.renderSkillsTabs.bind(this)
  }
  renderMobileFilter () {

  }
  componentDidMount () {
    console.log(this.node.scrollTop)
  }

  renderSkillsTabs () {
    console.log(this.props)
    const { selectedSkill, setSelectedSkill } = this.props
    return map(skillsData, (skill, index) => {
      const skillSlug = kebabCase(index)
      const skillName = spannify(skill.title)
      // const uri = `/#${skillSlug}`
      let skillSelected
      if (skillSlug === selectedSkill) {
        skillSelected = { color: skill.color }
      }
      // skillSelected = 'front-end'
      // let skillSelectedStyle = { color: 'rgb(0, 20, 172)' }

      return (
        <div
          key={`tab-${skillSlug}`}
          className={skillSlug}
          aria-selected={skillSlug === selectedSkill}
          style={skillSelected}
      ><a onClick={() => setSelectedSkill(skillSlug)}>{skillName}</a></div>
      )
    })
  }
  renderSkills () {
    const { selectedSkill } = this.props
    const skills = get(skillsData, selectedSkill)

    return (
      <SkillsList skill={skills} skillsCategory={selectedSkill} />
    )
  }
  render () {
    const { className, showSkillModal, selectedSkill } = this.props
    const skillSelected = get(skillsData, selectedSkill)
    const classes = classnames('skills-section', className)
    return (
      <div ref={(d) => {this.node = d }}  className={classes}>
        <div className='skills-title'>
          <h2>Core Competencies</h2>
        </div>
        <section className='skills'>
          <nav className='skills-tabs'>
            {this.renderSkillsTabs()}
          </nav>
          <div className='skills-container'>
            {this.renderSkills()}
          </div>
        </section>
      </div>
    )
  }
}

export default SkillsSection
