import React, { Component } from "react"

export default class SectionLove extends Component {
  state = {
    email : ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;

    // Add your own unique ID here or we will automatically assign an anonymousID
    window.analytics.identify('Email subscription',{
      color: 'Site color - Blue',
      email,
      type : 'Button',
      text: 'Get started',
      location : 'Sub Footer' 
    });
  }

  render() {
    const { email } = this.state;

    return (
      <section className="home_started">
        <div className="ui container">
          <div className="home_started__wrapper home_started_wrap">
            <div className="home_started_wrap__text">
              <h3 className="title t-h2">Make your web surfing happier and easy today</h3>
            </div>
            <div className="home_started_wrap__form">
              <form action="" onSubmit={this.handleSubmit}>
                <input type="email" placeholder="Enter email" name="email" value={email} onChange={this.handleChange}/>
                <input type="submit" value="Get Started" />
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}