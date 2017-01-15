/**
 * Created by lvx on 1/10/17.
 */
import React from 'react'
import classnames from 'classnames'
import { get, indexOf } from 'lodash'

import Hero from 'components/hero'
import PortfolioItem from 'components/portfolio-item'

import portfolioData from 'data/portfolio'

import './index.scss'

export const Portfolio = (props) => {
  const classes = classnames('page-portfolio', props.className)
  const portfolioItems = portfolioData
  const renderPortfolio = () => {
    return portfolioItems.map(item => {
      const featured = portfolioItems.indexOf(item) === 0
      return (
        <PortfolioItem
          key={item.id}
          data={item}
          featured={featured}
        />
      )
    })
  }
  return (
    <article className={classes}>
      <Hero
        title='Work in progress'
        transitionImage
        eventLabel='portfolio'
        subheading='Check back soon.'
        showDownChevron={false}
            />
      <div className='card-list work-items-list'>
        {renderPortfolio()}
      </div>
    </article>
  )
}

export default Portfolio
