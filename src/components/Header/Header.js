import React, {Component} from 'react'
import {connect} from 'react-redux'
import { IndexLink, Link } from 'react-router'
import {showModal} from 'store/navigation'
import './Header.scss'
import logo from './brandonjs.png'

class Header extends Component {
    constructor(props){
        super(props);
        this.showContactModal = this.showContactModal.bind(this);
        this.showNavigationOverlay = this.showNavigationOverlay.bind(this);
    }
    showContactModal() {
        let {dispatch} = this.props;
        dispatch(showModal('contacts'));
    }
    showNavigationOverlay() {
        let {dispatch} = this.props;
        dispatch(showModal('navigation'));
    }
    render (){
        return (
            <header className="app-header">
                <nav className="nav">
                    <div className="nav-left">
                        <a className="nav-item">
                            <img src={logo} alt="brandon.js" />
                        </a>
                    </div>
                    <div className="nav-center">
                        <div className="nav-center">
                            <a className="nav-item">
                              <span className="icon">
                                <i className="fa fa-github"></i>
                              </span>
                            </a>
                            <a className="nav-item">
                              <span className="icon">
                                <i className="fa fa-twitter"></i>
                              </span>
                            </a>
                        </div>
                    </div>
                    <span className="nav-toggle" onClick={this.showNavigationOverlay}>
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                    <div className="nav-right nav-menu">
                        <IndexLink to='/' className="nav-item" activeClassName='route--active'>
                            Home
                        </IndexLink>
                        <Link to='/portfolio' className="nav-item" activeClassName='route--active'>
                            Portfolio
                        </Link>
                        <a className="nav-item" onClick={this.showContactModal}>Contact</a>
                    </div>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state
})

export default connect(mapStateToProps)(Header)
