import React, { Component, PropTypes} from 'react'
import { connect } from 'react-redux'
import { IndexLink, Link } from 'react-router'
import TransitionManager from 'react-transition-manager'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import ReactTransitionGroup from 'react-addons-transition-group'
// const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup
import classnames from 'classnames'
import PageContainer from 'components/page-container'
import { showModal } from 'store/navigation'
import Header from '../../components/Header'
import Modal from 'components/modal'
import Footer from 'components/footer'
import SkillCategories from 'components/skill-categories'
import ContactTray from 'components/contact-tray'
import NavigationOverlay from 'components/navigation-overlay'
import contactsData from 'data/contacts.json'
// import PageLoader from 'components/page-loader'
import './CoreLayout.scss'

import '../../styles/core.scss'

// React.addons.CSSTransitionGroup

class CoreLayout extends Component {
  static propTypes = {
    children : PropTypes.element.isRequired
  }
  constructor (props) {
    super(props)
    this.showContactModal = this.showContactModal.bind(this)
    this.getCurrentPage = this.getCurrentPage.bind(this)
  }

  getCurrentPage () {
    const { currentPage } = this.props
    if (currentPage.pathname == '/') {
      return 'home'
    } else {
      return currentPage.pathname.split('/')[0]
    }
  }
  showContactModal () {
    let { dispatch } = this.props
    dispatch(showModal('contacts'))
  }
  renderModal () {
    const { modal: modalType } = this.props
    console.log(this.getCurrentPage(this.props.currentPage))
    let modal
    if (modalType) {
      let content
      let className
      switch (modalType) {
        case 'navigation':
          className = 'navigation'
                // content = <div></div>;
          content = (
            <NavigationOverlay section={this.props.currentPage.pathname}>
              <IndexLink to='/' key='home'>
                        Home
                      </IndexLink>
              <Link to='/portfolio' key='portfolio'>
                        Portfolio
                      </Link>
              <a key='contact' onClick={this.showContactModal}>Contact</a>
            </NavigationOverlay>
                  )
          break
        case 'contacts':
          className = 'tray'
          let contacts = contactsData
          content = <ContactTray contacts={contacts} />
          break
        case 'skillCategories':
          className = 'modal-skill-categories'
          content = <SkillCategories />
          break
        default:
          break
      }
      modal = <Modal key={modalType} className={className}>{content}</Modal>
    }
    return modal
  }
  render () {
    const { children } = this.props
    const contentClasses = classnames('app-content', {
      'disabled': !!this.props.modal,
      'mobile-no-scroll': this.props.modal
    })
    return (
      <div className='app'>
        <Header />
        <PageContainer key={this.getCurrentPage()} extraClasses={contentClasses}>
          <TransitionManager
            component='div'
            className='page-loader-container'
            duration={1000}
          >
            {children}
          </TransitionManager>
          <Footer />
        </PageContainer>
        <TransitionManager
          component='div'
          className='app__modal'
          duration={500}
        >
          {this.renderModal()}
        </TransitionManager>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  modal : state.navigation.modal,
  currentPage: state.location
})

export default connect(mapStateToProps)(CoreLayout)
