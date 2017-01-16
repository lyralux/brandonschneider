/**
 * Created by brand on 1/16/2017.
 */

import React from 'react'
import { map } from 'lodash'
import { connect } from 'react-redux'

import { setSelectedSkill } from 'routes/Home/modules/home'
import { closeModal, scrollTo } from 'store/navigation'

// import Flux from 'app/flux';
import CloseButton from 'components/close-button'
// import ModalContentMixin from 'app/lib/modal-content-mixin'
import './index.scss'

const skillCategories = {
  'front-end': 'Front-End',
  'back-end': 'Back-End',
  'personality': 'Personality'
}

const SkillCategories = React.createClass({
  onClickContent (event) {
    event.stopPropagation()
  },
  renderSkillCategories () {
    return map(skillCategories, (name, id) => {
      // const uri = (id === 'all') ? '/blog' : `/blog?category=${id}`;
      return <li key={`skill-category-${id}`} className={id}>
        <a onClick={this.getOnClickSkillCategoryHandler(id)}>
          {name}
        </a>
      </li>
    })
  },
  getOnClickSkillCategoryHandler (id) {
    const { closeModal, setSelectedSkill, scrollTo } = this.props
    return (event) => {
      event.preventDefault()
      closeModal()
      scrollTo()
      setSelectedSkill(id)
      // Flux.closeModal();
      // Flux.navigate(uri, true);
    }
  },
  onClickClose () {
    const { closeModal, scrollTo } = this.props
    closeModal()
    scrollTo()
    // Flux.closeModal();
  },
  render () {
    return (
      <div className="skill-categories" onClick={this.onClickContent}>
        <CloseButton onClose={this.onClickClose} autoAnim={500} />
        <div className="scroll-wrapper">
          <ul className="list">{this.renderSkillCategories()}</ul>
        </div>
      </div>
    )
  }
})

const mapDispatchToProps = (dispatch) => ({
  setSelectedSkill: (skill) => dispatch(setSelectedSkill(skill)),
  closeModal: () => dispatch(closeModal()),
  scrollTo: () => dispatch(scrollTo())
})
const mapStateToProps = (state) => ({
  ...state
})

export default connect(mapStateToProps, mapDispatchToProps)(SkillCategories)
