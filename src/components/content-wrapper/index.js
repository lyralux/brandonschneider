import React from 'react'

import './index.scss'

function ContentWrapper({ children, className }) {
  let classNames;
  if (className) {
    classNames = `content-wrapper ${className}`;
  } else {
    classNames = 'content-wrapper';
  }

  return (
    <div className={classNames}>
      <div className="content-wrapper-inner">
        {children}
      </div>
    </div>
  );
}

export default ContentWrapper;
