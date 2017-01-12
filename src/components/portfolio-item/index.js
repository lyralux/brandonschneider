/**
 * Created by brand on 1/12/2017.
 */
'use strict';

import React from 'react';
import {get, kebabCase} from 'lodash';


import ImageHover from 'components/image-hover';
import classnames from 'classnames';

import './index.scss';


const PortfolioItem = React.createClass({
  getInitialState() {
    return {
      hover: false
    };
  },
  render() {
    const { data, className, featured } = this.props;
    const id = data.id;
    const link = "";
    const category = "product";

    return <div className={classnames('card-item', 'work-item', `work-item-${id}`, `work-label-${kebabCase(category)}`, {
      featured: featured
    })}>
      <a href={link} onClick="" className="card-image">
        <div className="rimage background-image" style={{backGroundImage: `url(${get(data, 'img')}`}}>
          <img src={get(data, 'img')} />
        </div>
        <ImageHover autoAnim={500} hover={this.state.hover} />
      </a>
      <div className="card-details">
        <div className="category-tag">
          {category}
        </div>
        <h3 className="title">
          <a
            href={link}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick=""
          >{get(data, 'title')}</a>
        </h3>
        <div
          className="excerpt"
          dangerouslySetInnerHTML={{__html: get(data, 'excerpt')}}
        />
        <div className="tail">
          <a
            className="link"
            href={link}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onClick=""
          >Read more</a>
        </div>
      </div>
    </div>;
  },
  onMouseEnter() {
    this.setState({
      hover: true
    });
  },
  onMouseLeave() {
    this.setState({
      hover: false
    });
  }
});

export default PortfolioItem;
