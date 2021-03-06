import React from 'react';
import classnames from 'classnames';

import PageLoadingIcon from './PageLoaderIcon';
import './index.scss'

const PageLoader = React.createClass({
  render() {
    const props = this.props;
    return (
      <section className={classnames("page-loader", `loading-${this.props.pageId}`)}>
        <PageLoadingIcon pageId={this.props.pageId} />
      </section>
    );
  }
});

export default PageLoader;
