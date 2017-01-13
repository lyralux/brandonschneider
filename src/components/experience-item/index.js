/**
 * Created by brand on 1/11/2017.
 */
import React from 'react';
import classnames from 'classnames';
import ellipsize from 'ellipsize';
import { get } from 'lodash';
import moment from 'moment';


moment().format();

import './index.scss'

// import SVG from 'app/components/svg';

const ExperienceItem = React.createClass({
  componentDidUpdate() {
    const { props, open } = this.props;
    const el = this.node;
    const title = this.refs.title;
    const description = this.refs.description;
    let newHeight;
    if (open && this.getLoadedState()) {
      newHeight = title.clientHeight + description.clientHeight;
    } else {
      newHeight = title.clientHeight;
    }
    el.style.height = `${newHeight}px`;
  },
  onClick() {
    this.props.onClick && this.props.onClick();
  },
  getLoadedState() {
    return get(this.props.job, 'desc');
  },
  renderLocation() {
    const { colour } = this.props;
    const location = this.getLocationText();
    return <div className="location" style={{ color: colour }}>
      {location}
    </div>;
  },
  getLocationText() {
    const { colour, job } = this.props;
    const responseCity = get(job, 'location.city');
    const responseRegion = get(job, 'location.region');
    let location;
    if (responseRegion) {
      location = responseRegion;
    }  else {
      location = responseCity;
    }
    return location;
  },
  renderStatus() {
    const { job, open, colour } = this.props;
    const loaded = this.getLoadedState();
    return <div className="status">
      <div className="status-text">
        {open && loaded ? 'Hide info' : 'More info'}
      </div>
      <div className="status-icon">
        <div className="horiz" style={{ backgroundColor: colour }}></div>
        <div className="vert" style={{ backgroundColor: colour }}></div>
      </div>
    </div>;
  },
  renderTimeFrame() {
    const { job } = this.props;
    const start = moment(get(job, 'timeframe.start'));
    const isPresent = !get(job, 'timeframe.end');

    const end = get(job, 'timeframe.end') ? moment(get(job, 'timeframe.end')) : moment();

    const duration = moment.duration(end.diff(start));

    let strDurationYears = duration.years() ? duration.years() + ' years ' : '';
    let strDurationMonths = duration.months() ? duration.months() + ' months' : '';

    let strDuration = strDurationYears + strDurationMonths;

    let strStart = start.format('MMM. YYYY');
    let strEnd = isPresent ? 'Present' : end.format('MMM. YYYY');

    let str = strStart + ' - ' + strEnd + ' (' + strDuration + ')';

    return str;

  },
  renderHighlights() {
    const { job } = this.props;
    const hightLights = get(job, 'highlights');
    let list;
    if(hightLights.length) {
      list = (
        <ul className="job-highlights">
          {hightLights.map(highlight => (
            <li>{highlight}</li>
          ))}
        </ul>
      )
    }
    return list
  },
  render() {
    const { job, open, colour } = this.props;
    const classes = classnames('job-item', {
      open: open,
      loading: open && !this.getLoadedState()
    });
    return <li ref={(li) => this.node = li} className={classes} style={{ color: this.props.colour }}>
      <h4 ref="title" className="title" onClick={this.onClick}>
        <div className="title-text">{get(job, 'title')}</div>
        {this.renderLocation()}
        {this.renderStatus()}
      </h4>
      <div ref="description" className="job-description">
        <p className="company-text"><span className="job-title">{get(job, 'title')}, </span><span className="company-title">{get(job, 'company')}</span></p>
        <p className="timeframe-text">{this.renderTimeFrame()}</p>
        <p className="description-text">
          {ellipsize(get(job, 'desc'), 400)}
        </p>
        {this.renderHighlights()}

        <a
          className="link"
          href={get(job, 'url')}
          style={{ borderBottomColor: colour, display: 'none' }}
        >
          Read full description
        </a>
      </div>
    </li>;
  }
});

export default ExperienceItem;
