import React, { Component } from 'react'

export default class AboutNews extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="about_info_wrap__news about_info_news p-bottom">
          <div className="about_info_news__text">
            <h2 className="title t-h2">Using a proxy network to manage and scrape social media.</h2>
            <img src="" alt="" />
            <p>When managing multiple social media accounts or scraping data you may be getting captcha or your requests mayget blocked. Social sites are implementing strict and sophisticated limitations to control the ways in which they’re being used.</p>
            <p>Whether you are managing accounts or using a crawler, how do you avoid being blocked?</p>
            <a href="#/" className="t-h4">Read more <img src={require("../images/icon_about_more.svg")} alt="Icon" /></a>
          </div>
          <div className="about_info_news__posts">
            <div className="about_info_posts">
              <h3 className="title t-h3">Recent News</h3>
              <ul>
                <li>
                  <a href="#/" className="t-p">Lorem ipsum dolor sit amet, consectetuer adipiscing</a>
                  <div className="about_info_posts__date">
                    <p>Dec 11, 2018</p>
                  </div>
                </li>
                <li>
                  <a href="#/" className="t-p">Lorem ipsum dolor sit amet, consectetuer adipiscing</a>
                  <div className="about_info_posts__date">
                    <p>Dec 19, 2018</p>
                  </div>
                </li>
                <li>
                  <a href="#/" className="t-p">Lorem ipsum dolor sit amet, consectetuer adipiscing</a>
                  <div className="about_info_posts__date">
                    <p>Dec 23, 2018</p>
                  </div>
                </li>
              </ul>
            </div>
            <a href="#/" className="rss-btn btn btn--wob btn--lg">RSS Feed</a>
          </div>
        </div>
      </div>
    )
  }
}