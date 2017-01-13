/**
 * Created by lvx on 1/10/17.
 */
'use strict';

import React from 'react';
import classnames from 'classnames';


import EntranceTransition from 'components/entrance-transition';
import WordAnimation from 'components/word-animation';
import DownChevron from 'components/down-chevron';
// import Rimage from 'app/components/rimage';
// import Track from 'app/adaptors/server/track';

import './index.scss';

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chevronLoaded: false
        }
        this.onClickDownChevron = this.onClickDownChevron.bind(this);
    }
    componentDidMount() {
        if (this.props.showDownChevron) {
            this.animTimeout = setTimeout(() => {
                this.refs.downChevron.resetAnim();
                this.refs.downChevron.anim();
                this.setState({
                    chevronLoaded: true
                });
            }, 2500);
        }
    }
    componentWillUnmount() {
        if (this.props.showDownChevron) {
            clearTimeout(this.animTimeout);
        }
    }
    renderImage() {
        const { sizes, altText, transitionImage } = this.props;
        const image = <Rimage sizes={sizes} altText={altText} />;
        let output;
        if (transitionImage) {
            output = React.createElement(
                EntranceTransition,
                { className: 'image-entrance' },
                image
            );
        } else {
            output = image;
        }
        return output;
    }
    renderSubheading() {
        let subheading;
        if(this.props.subheading) {
            subheading = <p className="subheading">{this.props.subheading}</p>
        }
        return subheading;
    }
    renderDownChevron() {
        let chevron;
        if (this.props.showDownChevron) {
            chevron = <DownChevron
                ref="downChevron"
                onClick={this.onClickDownChevron}
                customClass={this.state.chevronLoaded ? 'loaded' : ''}
            />;
        }
        return chevron;
    }
    onClickDownChevron() {
      //TODO
    }
    render() {
        const { className, title, children } = this.props;
        return (
            <section ref={(section) => this.node = section} className={classnames('hero', className)}>
            <EntranceTransition className="title-entrance">
                <h1 className="title">
                    <WordAnimation delay={1} duration={1.5}>{title}</WordAnimation>
                </h1>
                {this.renderSubheading()}
            </EntranceTransition>
            {/*{this.renderImage()}*/}
            {children}
            {this.renderDownChevron()}
        </section>
        )
    }
}

export default Hero;
