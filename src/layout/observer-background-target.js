import React, { Component } from 'react'
import PropTypes from 'prop-types'
//
import withIntersectionObserver from './observer-hoc'

const pixelPlaceholder = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=`

class Target extends Component {
  render() {
    let bgImg = pixelPlaceholder

    if (this.props.readyForAction) {
      bgImg = this.props.src
    }

    return (
      <div style={{backgroundImage: `url(${bgImg})`}}
        className={this.props.classSet}>
        {this.props.children}
      </div>
    )
  }
}

Target.propTypes = {
  classSet: PropTypes.string,
}

Target.defaultProps = {
  classSet: '',
}

export default withIntersectionObserver({
  rootMargin: '0% 0% 20%'
})(Target);