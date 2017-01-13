/**
 * Created by brand on 1/11/2017.
 */
import React from 'react'
import TechStackItem from './TechStackItem'

import './index.scss';

export const TechStack = (props) => {
  const { stack } = props;
  return (
    <section className="tech-stack">
      <div className="stack-container">
        <div className="">
          <h2>Tech Stack</h2>
          <div className="stack-list columns is-multiline">
            {stack.map(item => (
              <TechStackItem key={item.title} item={item}/>
            ))}
          </div>
      </div>
      </div>
    </section>
  )
}

TechStack.propTypes = {
  // stack     : React.PropTypes.object.isRequired,
  // todo : React.PropTypes.func.isRequired
}

export default TechStack
