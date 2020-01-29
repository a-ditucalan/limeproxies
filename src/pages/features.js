import React, { Component } from 'react'
import { Link } from 'gatsby'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import Stats from '../layout/stats-limeproxies'
import SectionCoverage from '../layout/section-coverage'
import SectionLove from '../layout/section-love'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'
import { Helmet } from 'react-helmet'
import cmswhylimeproxies from '../dynamic/whyLimeProxies.json'

const whyData = [
  {
    icon: require('../images/icon_reasons_1.svg'),
    title: 'Blazing-fast Server speeds',
    text: 'Huge global network servers optimized for fast connections. Unlimited bandwidth, no throttling.'
  },
  {
    icon: require('../images/icon_reasons_2.svg'),
    title: 'No restrictions',
    text: 'Stream or download anything, from any of our servers, anywhere on Earth, with your IP address hidden from prying eyes.'
  },
  {
    icon: require('../images/icon_reasons_3.svg'),
    title: 'Serious security',
    text: 'Protect yourself from hacking and surveillance with 256-bit AES encryption and DNS/ IPv6 leak protection.'
  }
]

const howUseData = [
  {
    icon: require('../images/why-01-market-research.png'),
    title: 'Market Research',
    text: 'Make business decisions that are based on real data about the market.'
  },
  {
    icon: require('../images/why-02-brand-protection.png'),
    title: 'Brand Protection',
    text: 'Manage your brand perception and control brand reputation risks.'
  },
  {
    icon: require('../images/why-03-travel-fare-aggregation.png'),
    title: 'Travel Fare Aggregation',
    text: 'Offer the lowest rates from multiple travel sites to your customers.'
  },
  {
    icon: require('../images/why-04-add-verification.png'),
    title: 'Add Verification',
    text: 'Detect fraud, improve ad performance and protect your brand'
  },
  {
    icon: require('../images/why-05-pricing-intelligence.png'),
    title: 'Pricing Intelligence',
    text: 'Get real time pricing data and easily track your competitors.'
  },
  {
    icon: require('../images/why-06-seo-monitoring.png'),
    title: 'SEO Monitoring',
    text: 'Extract SERP data, search volume or ranking data for any keyword'
  },
  {
    icon: require('../images/why-07-online-gaming.png'),
    title: 'Online Gaming',
    text: 'Detect fraud, improve ad performance and protect your brand'
  },
  {
    icon: require('../images/why-08-global-entertainment.png'),
    title: 'Global Entertaintement',
    text: 'Get real time pricing data and easily track your competitors.'
  },
  {
    icon: require('../images/why-09-blocked-content.png'),
    title: 'Blocked Content',
    text: 'Extract SERP data, search volume or ranking data for any keyword'
  }
]

export default class WhyLimeproxies extends Component {

  componentDidMount() {
    window.analytics.page('Exclusive Proxies for Market Research | Why Lime Proxies',{
      name: "Why Limeproxies",
      title: "Exclusive Proxies for Market Research | Why Lime Proxies",
    });
  }

  render() {
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl
    return (
      <main className="why-limeproxies">
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="title" content={`${cmswhylimeproxies.meta_title}`}/>
            <meta name="description" content={`${cmswhylimeproxies.description}`} />
            <meta name="keywords" content={`${cmswhylimeproxies.yoast_keyword}`}/>
            <link rel="canonical" href={`${siteUrl}support`} />
            <title>{cmswhylimeproxies.meta_title}</title>
          </Helmet>

        <Header />

        <section className="why-hero">
          <div className="ui container">
            <div className="why-hero__wrapper">
              <div className="why-hero__info">
                <h1 className="why-hero__title t-h1">
                {cmswhylimeproxies.maintitle} <span className="t-blue">{cmswhylimeproxies.subtitle}</span>
                </h1>
                <p className="why-hero__text t-p-lg">{cmswhylimeproxies.titledescription}</p>
                {/* <Link to="/pricing" className="why-hero__button btn btn--wob btn--lg">Get Started for free</Link> */}
                <div className="home_header_item__form">
                  <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <input type="submit" value="Get Started" />
                  </form>
                </div>
              </div>
              <div className="why-hero__pic">
                <ImageObserver src={cmswhylimeproxies.bannerimage} />
              </div>
            </div>
          </div>
        </section>

        <section className="why-reasons">
          <div className="ui container">
            <div className="why-reasons__wrapper">
              { cmswhylimeproxies.section2.map((item) => (
                <div key={item.section2content.icontitle} className="why-reasons__item">
                  <div className="why-reasons__icon">
                    <ImageObserver src={item.section2content.icon} />
                  </div>
                  <h2 className="why-reasons__title t-h3">{item.section2content.icontitle}</h2>
                  <p className="why-reasons__text">{item.section2content.icondescription}</p>
                </div>
              )) }
            </div>
          </div>
        </section>

        <section className="why-use">
          <div className="ui container">
            <h2 className="why-use__header t-h2 t-center">{cmswhylimeproxies.section3title}</h2>
            <div className="why-use__wrapper">
              { cmswhylimeproxies.section3.map((item) => (
                <a key={item.section3content.section3icontitle} href={item.section3content.section3iconLink} className="why-use__item">
                  <div className="why-use__icon">
                    <ImageObserver src={item.section3content.section3icon} />
                  </div>
                  <div className="why-use__info">
                    <h3 className="why-use__title t-h4">{item.section3content.section3icontitle}</h3>
                    <p className="why-use__text">{item.section3content.section3icondescription}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <SectionCoverage />
        <Stats />
        <SectionLove />
        <SectionStarted />
        <Footer />
      </main>
    )
  }
}

export const query = graphql`
  query whyLime {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

