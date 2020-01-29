import React, { Component } from 'react'
import PropTypes from 'prop-types'
//
import classNames from 'classnames'
//
import withIntersectionObserver from './observer-hoc'

const pixelPlaceholder = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAAA1BMVEVHcEyC+tLSAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=`

class Target extends Component {
  render() {
    return (
      <img src={this.props.readyForAction ? this.props.src : pixelPlaceholder}
        data-src={this.props.src}
        className={classNames(this.props.classSet)}
        alt={this.props.altString} />
    )
  }
}

Target.propTypes = {
  classSet: PropTypes.string,
  altString: PropTypes.string
}

Target.defaultProps = {
  classSet: '',
  altString: ''
}

export default withIntersectionObserver({
  rootMargin: '0% 0% 20%'
})(Target);