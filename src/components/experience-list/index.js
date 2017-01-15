/**
 * Created by brand on 1/11/2017.
 */
'use strict'

import React from 'react'
import classnames from 'classnames'
import { get, find, kebabCase } from 'lodash'

import './index.scss'

// import getFeaturedImage from 'app/lib/get-featured-image';

import ExperienceItem from 'components/experience-item'
// import Rimage from 'app/components/rimage';

const ExperienceList = React.createClass({
  getInitialState () {
    return {
      selectedJob: null
    }
  },
  renderJobsList () {
    const { jobs } = this.props

    return (
      <ul className='jobs-list'>
        {jobs.map(this.renderJobItem)}
      </ul>
    )
  },
  renderJobItem (job) {
    return <ExperienceItem
      key={`job-${job.id}`}
      job={job}
      colour='#0014ac'
      open={this.state.selectedJob === job.id}
      onClick={this.generateOnClickJobItemHandler(job)}
    />
  },
  generateOnClickJobItemHandler (job) {
    return () => {
      const jid = job.id
      if (this.state.selectedJob === jid) {
        this.setState({ selectedJob: null })
      } else {
        this.setState({ selectedJob: jid })
      }
    }
  },
  render () {
    const { selected, title } = this.props
    const id = kebabCase(title)
    const classes = classnames('studio-jobs', `${id}-jobs`, {
      selected: selected
    })
    return <div className={classes}>
      <h3>{title}</h3>
      <div className='tab-content' id={`tab-content-${id}`}>
        {this.renderJobsList()}
      </div>
    </div>
  }
})

export default ExperienceList
