import React from 'react'
import {connect} from 'react-redux'
import classnames from 'classnames'
import {get} from 'lodash'

import { showModal } from 'store/navigation'
import Hero from 'components/hero'
import SingleColumn from 'components/single-column'
import ExperienceList from 'components/experience-list'
import TechStack from 'components/tech-stack'

import experienceData from 'data/experience'
import techStackData from 'data/techStack'
import './HomeView.scss'

export const HomeView = (props) => {
  const classes = classnames('page-join-us', props.className);
  console.log(get(techStackData, 'stack'));
  const ExperienceSection = () => {
      return (
          <div key="job-section">
              <div className="current-openings">
                  <h2>Experience</h2>
              </div>
              <section className="jobs">
                  <div className="jobs-container">
                    <ExperienceList
                      key={`jobs-experience`}
                      title="Experience"
                      jobs={experienceData}
                      selected={true}
                    />
                  </div>
              </section>
          </div>
      )
  };
  return (
    <article className={classes}>
      <Hero
        title="Work in progress"
        transitionImage={true}
        subheading="Check back soon"
        eventLabel='home'
        showDownChevron={true}
      />
        <SingleColumn
            key="home-column"
            headingColour=""
            ruleColour=""
            backgroundColour=""
            isInZebraList={false}
        >
          <h2 className="title">About me</h2>
          <div className="methumb-holder">
            <img className="methumb" src="/img/me_thumb_bw.jpg" />
          </div>
          <p className="title is-4 block">Brandon Schneider</p>
          <p className="subtitle is-6 has-text-centered">Full-Stack Developer</p>
          <hr />
            <p>My curiosity is my driving force. I am entirely self-taught and have built all of my experience based on doing things that I am passionate about, and truly enjoy doing.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus ultricies eleifend. Donec eget fringilla nisl. Curabitur mollis, neque at consequat tempor, ipsum purus molestie metus, quis fringilla nunc lorem eu neque. Proin vitae est mauris. Nulla sed leo feugiat nulla eleifend gravida. Aliquam ut venenatis metus. Suspendisse bibendum odio ipsum, sit amet volutpat nulla volutpat id.</p>
        </SingleColumn>
        <ExperienceSection/>
        <TechStack stack={get(techStackData, 'stack')}/>
    </article>
  )
};

const mapDispatchToProps = {
  showModal : (modalType) => showModal(modalType),
};
const mapStateToProps = (state) => ({
  ...state
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
