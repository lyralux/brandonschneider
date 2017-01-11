import React from 'react'
import {connect} from 'react-redux'
import DuckImage from '../assets/Duck.jpg'
import classnames from 'classnames'
import './HomeView.scss'
import { showModal } from 'store/navigation'
import Hero from 'components/hero'
import SingleColumn from 'components/single-column'

export const HomeView = (props) => {
  const classes = classnames('page-join-us', props.className);
  const ExperienceSection = () => {
      return (
          <div key="job-section">
              <div className="current-openings">
                  <h2>Experience</h2>
              </div>
              <section className="jobs">
                  <nav className="jobs-studio-tabs">

                  </nav>
                  <div className="jobs-container">

                  </div>
              </section>
          </div>
      )
  }
  return (
    <article className={classes}>
      <Hero
        title="Work in progress"
        transitionImage={true}
        subheading="Check back soon"
        eventLabel='home'
        showDownChevron={false}
      ></Hero>
        <SingleColumn
            key="home-column"
            title="About Me"
            headingColour=""
            ruleColour=""
            backgroundColour=""
            isInZebraList={false}
        >
            <p>Test</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer faucibus ultricies eleifend. Donec eget fringilla nisl. Curabitur mollis, neque at consequat tempor, ipsum purus molestie metus, quis fringilla nunc lorem eu neque. Proin vitae est mauris. Nulla sed leo feugiat nulla eleifend gravida. Aliquam ut venenatis metus. Suspendisse bibendum odio ipsum, sit amet volutpat nulla volutpat id.</p>
        </SingleColumn>
        <ExperienceSection/>
    </article>
  )
}

const mapDispatchToProps = {
  showModal : (modalType) => showModal(modalType),
}
const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
