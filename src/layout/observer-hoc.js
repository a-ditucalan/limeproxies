import React, { Component } from 'react'
import Observer from '@researchgate/react-intersection-observer'

export default objectOptions => BaseComponent => {
  const displayName = BaseComponent.displayName || BaseComponent.name || 'Component'
  return class WithIntersectionObserver extends Component {
    static displayName = `withIntersectionObserver(${displayName})`

    state = {
      isIntersecting: false,
      isVisible: false,
    }

    handleChange = ({ isIntersecting }, unobserve) => {
      if (!this.state.isIntersecting) {
        this.setState({ isIntersecting: isIntersecting })
      }

      this.setState({ isVisible: isIntersecting })
    }

    render() {
      let thresholdValue = 0
      if (objectOptions.threshold !== 0) {
        thresholdValue = objectOptions.threshold
      }

      const options = {
        onChange: this.handleChange,
        rootMargin: objectOptions.rootMargin,
        threshold: thresholdValue
      }

      return (
        <Observer {...options}>
          <BaseComponent {...this.props} readyForAction={this.state.isIntersecting} isVisible={this.state.isVisible} />
        </Observer>
      )
    }
  }
}