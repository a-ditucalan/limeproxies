import React, { Component } from 'react'
import { Link } from 'gatsby'

import { Helmet } from 'react-helmet'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import SectionLove from '../layout/section-love'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

export default class Affiliate extends Component {
  componentDidMount() {
    window.analytics.page('Affiliate Program | LimeProxies Service | LimeProxies', {
      name: 'Affiliate',
      title: "Affiliate Program | LimeProxies Service | LimeProxies",
    });
  }

  render() {
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <main className="affiliate">
      <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content="Affiliate Program | 50% Commission Rates | LimeProxies"/>
          <meta name="description" content="Want 50% affiliate commission? You can start making money when promoting Limeproxies with our affiliate program for a lifetime. Contact us for more Information" />
          <meta name="keywords" content="private proxy, best private proxy service" />
          <link rel="canonical" href={`${siteUrl}affiliate`} />
          <title>Affiliate Program | LimeProxies Service | LimeProxies</title>
        </Helmet>

        <Header />
        <div className="affiliate-banner affiliate-block spacing--top-half spacing--bottom">
          <div className="ui container px-3 px-lg-0">
            <div className="affiliate-block__content">
              <div className="affiliate-block__info">
                <h1 className="affiliate-banner__title t-h1 pb-2">
                  <div>Limeproxies</div>
                  <div className="t-blue">Affiliate Program</div>
                </h1>
                <p className="affiliate-banner__subtitle t-p-lg pb-3 pr-lg-5">
                  Earn serious money referring people to our Limeproxies service. Up to 100% commission rates with lifetime recurring commission.
                </p>
                <a href="https://limeproxiesonline.tapfiliate.com/publisher/signup/limeproxies/" target="_blank" className="btn btn--lg btn--wob mx-auto mx-lg-0">Signup</a>
              </div>
              <div className="affiliate-block__pic">
                <ImageObserver src={require('../images/affiliate-page-02.png')} altString="woman holding shield and piggybank with coins at her feet"/>
              </div>
            </div>
          </div>
        </div>

        <div className="affiliate-block spacing--top spacing--bottom bg-gray">
          <div className="ui container px-3 px-lg-0">
            <h2 className="t-h2-md t-center mb-5">Our Affiliate Program is FREE to join.</h2>
            <div className="affiliate-block__content">
              <div className="affiliate-block__info">
                <p className="t-p-md t-bold">You can start making money when promoting Limeproxies with our affiliate program for lifetime!</p>
                <p className="t-p-md">Just <a href="https://limeproxiesonline.tapfiliate.com/publisher/signup/limeproxies/" target="_blank" className="t-blue">SIGN UP</a> media posts, or any place online. When a user clicks on your link and lands on Limeproxies website, their activity will be tracked by our affiliate software. When the user creates an account because of your link, you will start earning commission money.</p>
                <p className="t-p-md">Number of customers resulting from your unique link will be displayed under your affiliate program section on your account.</p>
              </div>
              <div className="affiliate-block__pic pl-lg-5">
                <ImageObserver src={require('../images/affiliate-page-03.png')} altString="jigsaw puzzle pieces"/>
              </div>
            </div>
          </div>
        </div>

        <div className="affiliate-block spacing--top-half spacing--bottom">
          <div className="ui container px-3 px-lg-0">
            <div className="affiliate-block__content">
              <div className="affiliate-block__pic">
                <ImageObserver src={require('../images/affiliate-page-04.png')} altString=""/>
              </div>
              <div className="affiliate-block__info pl-lg-3 pl-xl-5">
                <h2 className="t-h2-md pb-3 pb-xl-4">Increase Your Bank Account</h2>
                <p className="t-p-md">Affiliate Program Commissions are for Life Time! When you refer a user who becomes a paying user, then you start earning commission for every sale. We care about the people who are helping us. That’s why we always try to do the best for our affiliates happy. Your commissions will be for lifetime that means you will earn money for not only the initial payment but also for all future recurring payments.</p>
              </div>
            </div>
            <p className="t-p-lg t-center pt-5 mb-2">Contact <a href="mailto:support@limeproxies.com" className="t-blue">Support</a> for more Info.</p>
            <p className="t-p-lg t-center">*Payment processing fees will be deducted from the commissions.</p>
          </div>
        </div>

        <div className="affiliate-cta spacing--top spacing--bottom blue-lime-gradient">
          <div className="ui container px-3 px-lg-0">
            <h2 className="t-h2-md t-white t-center mb-5">Affiliates Program</h2>
            <h3 className="t-h1 t-white t-center mb-5 pb-1">50% Affiliate Commission!</h3>
            <a href="https://limeproxiesonline.tapfiliate.com/publisher/signup/limeproxies/" target="_blank" className="btn btn--wob btn--lg mx-auto">Start For free</a>
          </div>
        </div>

        <div className="spacing--top spacing--bottom">
          <div className="ui container px-3 px-lg-0"> 
            <h2 className="t-h2-md t-center mb-5">How It Works</h2>
            <p className="t-p-md t-center mb-5 pb-4">Sign up for our affiliate program and get a 50% lifetime commission from all paying customers that come through your affiliate link. This process is easy, reliable and secure.</p>

            <div className="affiliate-graphic">
              <div className="affiliate-graphic__laptop">
                <ImageObserver src={require('../images/affiliate-page-05.png')} altString="" />
              </div>
              <div className="affiliate-graphic__arrow">
                <ImageObserver className="d-none d-md-block" src={require('../images/affiliate-page-06.png')} altString="" />
                <ImageObserver className="d-md-none" src={require('../images/affiliate-page-06-m.png')} altString="" />
              </div>
              <div className="affiliate-graphic__money">
                <ImageObserver src={require('../images/affiliate-page-07.png')} altString="" />
                <div className="affiliate-graphic__profit blue-lime-gradient t-white t-bold">
                  $250 Profit
                </div>
              </div>              
            </div>

            <div className="affiliate-how-list mt-5">
              {["Earn 50% Sale", 
                "Payment Via PayPal, Payza, Skril or Bank Wire",
                "90 day session cookie",
                "Commision is paid after 30 days",
                "Recurring Revenue"].map((item) => (
                <div className="affiliate-how-list__item mt-3" key={item}>
                  <ImageObserver className="mr-3" src={require('../images/affiliate-page-check.png')} altString="checkmark" />
                  <p className="t-p-md">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionLove />
        <SectionStarted />
        <Footer />
      </main>
    )
  }
}

export const query = graphql`
  query affiliate {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`