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
    color: 'linear-gradient(30deg, #16D6D9, #14C04D)',
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
    desc: 'Experience with: Database creation, integration, and management—e.g., MySQL, SQLite, PostgreSQL, and MongoDB. Cloud computing integration. Web Server technologies (Apache, Nginx, and IIS). Server-side programming languages (Python, PHP, Ruby, Node.js). Operating systems: Linux and Unix, macOS, Windows Server' +
      ' Content management system (CMS) development, deployment, and maintenance.' +
      ' API integration.',
    color: 'linear-gradient(30deg, #16D6D9, #009CF3)',
    skills: [
      {
        title: 'PHP (Symfony2, Laravel)',
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
        title: 'API Integration',
        exp: 5,
        val: 85
      }
    ]
  },
  'personality': {
    title: 'Personality',
    desc: 'Curiosity is my driving force. I\'ve build all of my experience based off doing things that I\'m passionate about, and truly enjoy doing. Equal parts technology and vision, I\'m both creative and tech-savvy. I consider myself an artist and programming as a usable art.',
    color: 'linear-gradient(30deg, #E60C29, #FFC39B)',
    skills: [
      {
        title: 'Technical capability',
        exp: 28,
        val: 100
      },
      {
        title: 'Superior attention to detail',
        exp: 28,
        val: 100
      },
      {
        title: 'Adaptability, quickly learn new technologies',
        exp: 28,
        val: 100
      },
      {
        title: 'Curiosity',
        exp: 28,
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
