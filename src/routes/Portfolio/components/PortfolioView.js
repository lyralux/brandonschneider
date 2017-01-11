/**
 * Created by lvx on 1/10/17.
 */
import React from 'react'
import classnames from 'classnames'
import Hero from 'components/hero'
import './index.scss'

export const Portfolio = (props) => {
    const classes = classnames('page-portfolio', props.className);
    return (
        <article className={classes}>
            <Hero
                title="Work in progress"
                transitionImage={true}
                eventLabel="portfolio"
                subheading="Check back soon."
                showDownChevron={false}
            />
        </article>
    )
}

export default Portfolio
