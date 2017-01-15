/**
 * Created by brand on 1/11/2017.
 */
/**
 * Created by brand on 1/11/2017.
 */
import React from 'react'
import reactSvg from './react.svg'

export const TechStackItem = (props) => {
  const { item } = props

  return (
    <div className='column is-one-third'>
      <div className='card'>
        <div className='card-image' style={{ display: 'none' }}>
          <figure className='image is-1by1'>
            <img src={item.img} style={{ padding: '30px' }} alt='Image' height='200' />
          </figure>
        </div>
        <div className='card-content'>
          <div className='media'>
            <div className='media-left'>
              <figure className='image is-96x96' >
                <img src={item.img} alt='Image' />
              </figure>

            </div>
            <div className='media-content'>
              <p className='title is-3 block'>{item.title}</p>
              <p className='subtitle is-6'>{item.type}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

TechStackItem.propTypes = {
  item     : React.PropTypes.object.isRequired
}

export default TechStackItem

// return (
//   <li className="stack-item">
//     <div className="columns">
//       <div className="column stack-img">
//         <img src={item.img} />
//       </div>
//       <div className="column stack-title">
//         {item.title}
//       </div>
//       <div className="column stack-type">
//         {item.type}
//       </div>
//     </div>
//     <div className="job-description">
//       <p className="description-text"></p>
//     </div>
//   </li>
// )
