import React, { Component } from 'react'
import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'

export default class RangeSlider extends Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      value: 10
    }
  }

  handleChange = value => {
    this.setState({
      value: value
    })

    this.props.callback(value);
  };

  handleInput = (e) => {
    let newValue = parseInt(e.target.value)
    if (newValue === "") {
      newValue = 1
    } else {
      if (newValue > 2500) {
        newValue = 2500;
      }
    }
    this.setState({ value: newValue })

    this.props.callback(newValue);
  }

  render () {
    // console.log(this.state.value)
    const { value } = this.state
    return (
      <div className="slider">
        <div className="range-value">
          <span className="range-label">I want to buy</span>
          <span><input className="range-input" type="text" onChange={this.handleInput} value={this.state.value ? this.state.value : ""} /> proxies</span>
        </div>
        <Slider
          min={10}
          max={2500}
          value={value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}