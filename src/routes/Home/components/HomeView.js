import React from 'react'
import classnames from 'classnames'
import { get } from 'lodash'
import Hero from 'components/hero'
import SingleColumn from 'components/single-column'
import ExperienceList from 'components/experience-list'
import TechStack from 'components/tech-stack'
import SkillsSection from './SkillsSection'
// import PageLoader from 'components/page-loader'

import techStackData from 'data/techStack'
import './HomeView.scss'

class HomeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false
    }

  }
  componentDidMount () {
    const { fetchExperience } = this.props
    fetchExperience()
  }
  render () {
    const { experienceData, showModal } = this.props
    const { loaded } = this.state

    // if(!loaded) {
    //   return <PageLoader pageId="join-us" />
    // }
    const classes = classnames('page-join-us', this.props.className)
    console.log(get(techStackData, 'stack'))

    const ExperienceSection = () => {
      return (
        <div key='job-section'>
          <div className='current-openings'>
            <h2>Experience</h2>
          </div>
          <section className='jobs'>
            <div className='jobs-container'>
              <ExperienceList
                key={`jobs-experience`}
                title='Experience'
                jobs={experienceData}
                selected
              />
            </div>
          </section>
        </div>
      )
    }
    return (
      <article ref={(a) => { this.node = a }} className={classes}>
        <Hero
          title="Hi, I'm Brandon. I create and design user interfaces."
          transitionImage
          eventLabel='home'
          showDownChevron
        >
          <div className='hero-button'>
            <a className='button submit' onClick={() => showModal('contacts')}><span className='submit-text'>Work with me</span></a>
          </div>
        </Hero>
        <SingleColumn
          key='home-column'
          headingColour=''
          ruleColour=''
          backgroundColour=''
          isInZebraList={false}
        >
          <h2 className='title'>About me</h2>
          <div className='methumb-holder'>
            <img className='methumb' src='/img/me_thumb_bw.jpg' />
          </div>
          <p className='title is-4 block'>Brandon Schneider</p>
          <p className='subtitle is-6 has-text-centered'>Full-Stack Developer</p>
          <hr />
          <p>My curiosity is my driving force.
            I am entirely self-taught and have built all of my experience based on doing
            things that I am passionate about, and truly enjoy doing.</p>
          <p>
            I currently work as an independent contractor and am also exploring full-time opportunities.
          </p>
          <p className='has-text-centered' style={{ marginTop: 40 }}>
            <a className='button view_source' href='https://github.com/lyralux/brandonschneider' target='_blank'>
              <span className='icon'><i className='fa fa-github' /></span>
              <span>View source code on Github</span>
            </a>
          </p>
        </SingleColumn>
        <ExperienceSection />
        <SkillsSection showSkillModal={this.props.showModal} className={'home-skills'} setSelectedSkill={this.props.setSelectedSkill} selectedSkill={this.props.selectedSkill} />
        <TechStack stack={get(techStackData, 'stack')} />
      </article>
    )
  };
}

export default HomeView
