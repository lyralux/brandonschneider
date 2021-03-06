/**
 * Created by lvx on 1/10/17.
 */

import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

import './index.scss'

class CloseButton extends Component {
  constructor (props) {
    super(props)
    this.state = Object.assign({
      currentFrame: 0,
      fadeInDuration: 10,
      fps: 25,
      frameName: 'Frame',
      totalFrames: 0
    }, props)

    this.anim = this.anim.bind(this)
    this.resetAnim = this.resetAnim.bind(this)
    this.goToProgressRatio = this.goToProgressRatio.bind(this)
    this.goToFrame = this.goToFrame.bind(this)
    this.hideAllFrames = this.hideAllFrames.bind(this)
  }
  componentDidMount () {
    const autoAnim = this.props.autoAnim
    let svgElement = this.animsvg
    this.setState({ totalFrames: svgElement.childNodes.length })
    if (autoAnim) {
      if (autoAnim) {
        setTimeout(this.anim, autoAnim)
      } else {
        this.anim()
      }
    } else if (this.state.fadeInDuration > 0) {
      for (let i = 1; i <= this.state.fadeInDuration; i++) {
                // TODO: add tween function support
        svgElement.getElementById(this.state.frameName + i).style.opacity = i / this.state.fadeInDuration
      }
    }
    this.resetAnim()
  }
  componentWillUnmount () {
    this.resetAnim()
  }
  hideAllFrames () {
    let svg = this.animsvg
    for (let i = 0; i < svg.childNodes.length; i++) {
      svg.childNodes[i].style.display = 'none'
    }
  }
  goToFrame (frameNumber) {
    this.setState({ currentFrame: frameNumber })
    window.cancelAnimationFrame(this.frameRequest)
    this.frameRequest = window.requestAnimationFrame(() => {
      this.hideAllFrames()
      this.animsvg.getElementById(this.state.frameName + frameNumber).style.display = 'inline-block'
    })
  }
  goToProgressRatio (progressRatio) {
    this.goToFrame(Math.ceil(this.state.totalFrames * progressRatio))
  }
  resetAnim () {
    clearTimeout(this.timeout)
    window.cancelAnimationFrame(this.frameRequest)
    this.hideAllFrames()
    this.setState({ currentFrame: 0 })
  }
  anim () {
    this.timeout = setTimeout(() => {
      this.goToFrame(this.state.currentFrame + 1)
      if (this.state.currentFrame < this.state.totalFrames) {
        this.anim()
      } else {
        if (this.props.loop) {
          this.setState({ currentFrame: 0 })
          this.anim()
        }
      }
    }, 1000 / this.state.fps)
  }
    // mixins: [SVGSequenceAnimation({ fadeInDuration: 10 })],
  render () {
    return (
      <button onClick={this.props.onClose} className={classnames('close-button', this.props.className)}>
        {this.props.children}
        <span className='text'>Close</span>
        <svg ref={(svg) => { this.animsvg = svg }}
          title='Close menu'
          role='img'
          viewBox='0 0 20 20'
          style={this.props.style}>
          <g id='Frame16'>
            <path d='M6.507 7.323c.268-.25.54-.5.807-.75.904.97 1.812 1.944 2.72 2.913.92-.983 1.835-1.97 2.757-2.952l.81.75c-.93 1.008-1.87 2.008-2.8 3.008.89.953 1.78 1.906 2.67 2.867-.26.25-.54.5-.8.75-.872-.94-1.74-1.88-2.614-2.81-.874.94-1.757 1.88-2.632 2.83-.266-.25-.54-.5-.805-.75.894-.96 1.8-1.92 2.69-2.89-.93-.99-1.85-1.99-2.774-2.98z' />
          </g>
          <g id='Frame15'>
            <path d='M10.03 9.486c1.117-1.194 2.227-2.39 3.344-3.586.266.25.54.5.805.75-1.14 1.22-2.27 2.43-3.4 3.642.89.953 1.78 1.906 2.66 2.86l-.81.75c-.88-.93-1.74-1.868-2.61-2.806-.9.93-1.76 1.883-2.65 2.82-.27-.25-.53-.5-.81-.75.893-.97 1.8-1.922 2.69-2.89-.92-.986-1.84-1.98-2.77-2.97.267-.25.54-.5.806-.75.914.985 1.82 1.962 2.726 2.93z' />
          </g>
          <g id='Frame14'>
            <path d='M10.03 9.486c1.352-1.444 2.695-2.897 4.055-4.344.267.25.54.5.805.75-1.365 1.47-2.732 2.93-4.102 4.398.89.954 1.78 1.907 2.664 2.868-.266.25-.54.5-.805.75-.875-.93-1.742-1.875-2.617-2.805-.688.732-1.375 1.477-2.062 2.21-.266-.25-.54-.5-.805-.75.703-.757 1.414-1.517 2.117-2.273-.922-.992-1.843-1.984-2.773-2.976.268-.25.54-.5.807-.75.904.978 1.81 1.955 2.716 2.922z' />
          </g>
          <g id='Frame13'>
            <path d='M10.03 9.486c1.625-1.74 3.25-3.483 4.875-5.227.266.25.54.5.805.75-1.64 1.76-3.29 3.52-4.93 5.28.89.95 1.78 1.9 2.672 2.87-.266.25-.54.5-.805.75-.875-.93-1.742-1.88-2.617-2.81-.312.33-.625.66-.93 1-.268-.25-.54-.5-.807-.75.328-.36.656-.71.984-1.07-.92-.99-1.852-1.987-2.772-2.97.268-.25.54-.5.807-.75.906.96 1.812 1.94 2.718 2.903z' />
          </g>
          <g id='Frame12'>
            <path d='M15.28 4.01l-4.562 4.892.656.608c1.734-1.852 3.46-3.71 5.188-5.57-.267-.202-.53-.413-.812-.602-.157.228-.29.47-.47.672M6.46 7.27c2.062 2.21 4.125 4.43 6.188 6.64.267-.25.54-.5.805-.75-2.062-2.21-4.125-4.43-6.188-6.64-.274.257-.538.5-.805.75z' />
          </g>
          <g id='Frame11'>
            <path d='M14.132 3.3c.11-.203.22-.406.328-.61.68.376 1.344.79 1.953 1.273-.68.734-1.367 1.47-2.047 2.195-.172-.156-.336-.312-.508-.478.508-.54 1.016-1.087 1.516-1.625-.397-.278-.82-.52-1.242-.756zm-7.04 3.047c2.118 2.272 4.235 4.547 6.36 6.82-.266.25-.54.5-.805.75-2.117-2.272-4.242-4.547-6.36-6.82.275-.25.54-.51.806-.75z' />
          </g>
          <g id='Frame10'>
            <path d='M13.015 2.66c.062-.148.125-.305.188-.453.978.406 1.897.93 2.76 1.547-.096.133-.196.266-.29.398-.83-.603-1.72-1.103-2.658-1.492zM5.968 6.746c.268-.25.54-.5.807-.75 2.22 2.383 4.438 4.758 6.654 7.14l-.81.75c-2.23-2.384-4.44-4.76-6.66-7.14z' />
          </g>
          <g id='Frame9'>
            <path d='M12.124 1.94c.853.243 1.656.603 2.422 1.032-.04.062-.107.188-.14.25-.75-.414-1.54-.773-2.36-1.01.03-.09.056-.177.078-.27zm-6.72 4.21c.267-.25.54-.5.806-.75 2.36 2.53 4.72 5.062 7.086 7.594-.266.25-.54.5-.805.75-2.35-2.53-4.71-5.06-7.08-7.594z' />
          </g>
          <g id='Frame8'>
            <path d='M11.32 1.86c.75.118 1.468.368 2.155.674.062.022.117.07.148.133-.76-.29-1.517-.608-2.32-.728 0-.02.01-.06.016-.08zM4.57 5.105l.655-.61c2.57 2.76 5.14 5.517 7.72 8.275-.22.21-.44.414-.657.615-2.57-2.764-5.148-5.524-7.72-8.28z' />
          </g>
          <g id='Frame7'>
            <path d='M10.75 1.87c.038-.015.108-.038.147-.054.727.055 1.43.258 2.11.522-.01.017-.024.062-.032.078-.718-.29-1.468-.46-2.226-.545zM3.437 3.736c.242-.288.516-.555.812-.78.14.18.28.367.42.547l-.28.233c2.66 2.86 5.33 5.72 8 8.58-.18.155-.34.31-.51.476-2.82-3.017-5.64-6.04-8.45-9.056z' />
          </g>
          <g id='Frame6'>
            <path d='M10.538 1.8c.633-.01 1.258.133 1.86.31.077.032.21.032.202.15-.688-.18-1.383-.392-2.11-.376.017-.023.04-.06.048-.085zM3.57 3.736c1.015-1.18 2.585-1.897 4.155-1.788-.015.163-.023.327-.03.49-1.266-.085-2.524.44-3.438 1.298 2.43 2.587 4.844 5.188 7.266 7.782-.117.125-.242.234-.367.344C8.616 9.16 6.093 6.448 3.57 3.736z' />
          </g>
          <g id='Frame5'>
            <path d='M10.43 1.792c.655 0 1.327.086 1.944.328-.022.016-.062.047-.086.062-.61-.164-1.234-.312-1.86-.29v-.1zm-6.72 1.92c.978-1.077 2.438-1.757 3.898-1.67 1.055.03 2.07.46 2.93 1.056.188.14.398.24.61.352-.032.06-.087.194-.118.257-.445-.133-.79-.47-1.195-.68-.97-.563-2.125-.82-3.233-.61-.938.18-1.806.656-2.492 1.32 1.992 2.125 3.97 4.258 5.96 6.383-.068.078-.132.156-.202.234C7.828 8.2 5.82 6.02 3.79 3.847c-.018-.04-.057-.1-.08-.134z' />
          </g>
          <g id='Frame4'>
            <path d='M3.874 3.65c.883-.883 2.086-1.5 3.353-1.522 1.21-.07 2.39.406 3.366 1.103.828.5 1.767.84 2.734.87.117.03.03.2-.078.16-.98-.09-1.95-.39-2.78-.91-.74-.51-1.57-.9-2.46-1.04-.42-.02-.84-.03-1.26 0C5.71 2.49 4.73 3 4 3.76c.685.71 1.342 1.446 2.03 2.155.4.484.87.9 1.265 1.375-.03.023-.094.07-.133.095-.375-.47-.828-.87-1.22-1.33-.36-.414-.764-.78-1.116-1.203-.31-.38-.688-.69-.99-1.07.006-.037.02-.09.03-.12z' />
          </g>
          <g id='Frame3'>
            <path d='M8.093 2.207c.267-.023.53.07.78.148.595.188 1.15.492 1.665.844 1.203.75 2.703 1.13 4.094.73.008.04.03.11.047.14-.57.11-1.15.24-1.73.13-.86-.1-1.69-.4-2.43-.84-.65-.45-1.36-.83-2.13-1-.12-.01-.22-.07-.3-.17z' />
          </g>
          <g id='Frame2'>
            <path d='M14.35 3.963c.368-.047.696-.21 1.056-.29-.258.346-.727.368-1.102.47.008-.046.03-.133.047-.18zm-1.39.134c.367-.03.734-.017 1.103-.04.094-.016.18.048.258.095-.39.055-.79.133-1.19.062-.04-.023-.13-.087-.16-.117z' />
          </g>
          <g id='Frame1'>
            <path d='M15.007 3.94c.07-.296.445-.335.695-.42-.125.255-.445.318-.695.42z' />
          </g>
        </svg>
      </button>
    )
  }
}

CloseButton.propTypes = {
  onClose: PropTypes.func.isRequired,
  autoAnim: PropTypes.bool,
  loop: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node
}

export default CloseButton
