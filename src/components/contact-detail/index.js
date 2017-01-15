/**
 * Created by lvx on 1/10/17.
 */
import React from 'react'
import classnames from 'classnames'
import './index.scss'

export const ContactDetail = ({ detail }) => (
  <div className='contact-detail'>
    <h3 className='title'>{detail.title}</h3>
    <p className='description'>{detail.desc}</p>
    {detail.methods.map(link => {
      return <a
        key={`contact-detail-link-${link.uri}`}
        className={classnames('link', link.type)}
        href={link.uri}
            >
        {link.text}
      </a>
    })}
  </div>
)

export default ContactDetail
