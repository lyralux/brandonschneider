/**
 * Created by brand on 1/16/2017.
 */
import React from 'react'
import classnames from 'classnames'

// import Flux from 'app/flux';

// import SVG from 'app/components/svg';
// import LoadingIcon from 'app/components/loading-icon';

const skillCategories = {
  'front-end': 'Front-End',
  'back-end': 'Back-End',
  'personality': 'Personality'
}

const SkillFilter = React.createClass({
  onClickSearch() {
    // Flux.showSearch();
  },
  onClickSelectedCategory() {
    // Flux.showBlogCategories();
  },
  render () {
    const { className, home: selectedSkill } = this.props
    return (
      <div className={classnames('skill-controls', className)}>
        <div className='skill-filter'>
          <div
            className='selected'
            onClick={this.onClickSelectedCategory}
          >
            {skillCategories[selectedSkill]}
          </div>
        </div>
      </div>
    )
  }
})

export default SkillFilter
