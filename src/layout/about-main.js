import React, { Component } from 'react'

import Stats from '../layout/stats-limeproxies'
import SectionLove from '../layout/section-love'

import ImageObserver from '../layout/observer-image-target'

export default class AboutMain extends Component {
  render() {
    return (
      <div>
        <div className="ui container">
          <div className="about_info_wrap__item about_info_item">
            <div className="about_info_item__text">
              <div className="about_info_item__img">
                <ImageObserver src={require("../images/img_about_us.jpg")} altString="" />
              </div>
              <h2 className="title t-h2">Our Mission</h2>
              <p>At LimeProxies, our number one priority is our customers’ success. Through the use of cutting-edge technologies and comprehensive solutions, we are dedicated to developing innovative services and providing exceptional support to meet our customer’s diverse hosting needs. We are an independent company located in United States and not a subsidiary or reseller of a larger parent company.</p>
              <p>Throughout our almost 9 years of experience in the industry, we have worked to integrate emerging technologies and provide easy-to-use solutions to help our customers build and manage their sites the same way they their handle business — project by project.</p>
              <p>LimeProxies moves beyond generic products to provide a range of proxy solutions that improve productivity, increase profitability, and empower our customer’s to achieve their goals. We do this by embracing three simple concepts in everything we do:</p>
            </div>
          </div>
        </div>
        
        <div className="about_main_divider"></div>

        <Stats />

        <section className="about_years bg-pastel-lime">
          <div className="ui container">
            <div className="about_years__title">
              <h2 className="title t-h2">We Believe in Continuous Growth</h2>
            </div>
            <div className="about_years__wrapper about_years_wrap">
              <div className="about_years_wrap__rocket">
                <ImageObserver src={require("../images/img_about_rocket.svg")} altString="rocket ship" />
                <p className="t-p-lg">Limeproxies launched in 2010</p>
              </div>
              <div className="about_years_wrap__item about_years_item">
                <h3 className="title t-h4">2011</h3>
                <p>Launch with its first proxy</p>
              </div>
              <div className="about_years_wrap__item about_years_item">
                <h3 className="title t-h4">2012</h3>
                <p>First international proxy server setup</p>
              </div>
              <div className="about_years_wrap__item about_years_item">
                <h3 className="title t-h4">2013</h3>
                <p>Automated dashboard launched</p>
              </div>
              <div className="about_years_wrap__item about_years_item">
                <h3 className="title t-h4">2014</h3>
                <p>SOCKS5 proxies launched</p>
              </div>
              <div className="about_years_wrap__item about_years_item">
                <h3 className="title t-h4">2015</h3>
                <p>24/7 support launched</p>
              </div>
              <div className="about_years_wrap__item about_years_item">
                <h3 className="title t-h4">2016</h3>
                <p>Expanded to 40+ Locations</p>
              </div>
              <div className="about_years_wrap__item about_years_item">
                <h3 className="title t-h4">2017</h3>
                <p>Launched version 2 of network</p>
              </div>
              <div className="about_years_wrap__item about_years_item">
                <h3 className="title t-h4">2018</h3>
                <p>10tb/day network data reached</p>
              </div>
            </div>
            {/* <div className="about_years__title">
              <h2 className="title t-h2">Want to Join the Lime Team? We are hiring!</h2>
            </div>
            <div className="about_years__btn">
              <a href="#/" className="btn btn--wob btn--lg">Check available opportunities!</a>
            </div> */}
          </div>
        </section>

        {/* <section className="about_infrastructure">
          <div className="ui container">
            <div className="about_infrastructure__title">
              <h2 className="title t-h2">Our Infrastructure</h2>
            </div>
            <div className="about_infrastructure__logo about_infrastructure_logo">
              <div className="about_infrastructure_logo__item">
                <img src={require("../images/logo_labs.jpg")} alt="Img" />
              </div>
              <div className="about_infrastructure_logo__item">
                <img src={require("../images/logo_webposition.jpg")} alt="Img" />
              </div>
              <div className="about_infrastructure_logo__item">
                <img src={require("../images/logo_booking.jpg")} alt="Img" />
              </div>
              <div className="about_infrastructure_logo__item">
                <img src={require("../images/logo_hotels.jpg")} alt="Img" />
              </div>
            </div>
          </div>
        </section> */}

        <SectionLove />
      </div>
    )
  }
}