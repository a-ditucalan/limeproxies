import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import Stats from '../layout/stats-limeproxies'
import SectionCoverage from '../layout/section-coverage'
import SectionLove from '../layout/section-love'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'
import { Helmet } from 'react-helmet'

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
    const {markdownRemark} = this.props.data;
    const post = markdownRemark.frontmatter;
    window.analytics.page(post.meta_title + '| LimeProxies', {
      name: post.meta_title,
      title: post.meta_title + ' | LimeProxies',
    });
  }

  render() {
   
    const { markdownRemark, site } = this.props.data // data.markdownRemark holds our post data
    const { html } = markdownRemark
    const post = markdownRemark.frontmatter

    const siteUrl = site.siteMetadata.siteUrl
    const path = post.path
    const finalPath = path.replace(/^\/|\/$/g, '')
    
    return (
      <main className="why-limeproxies">
          <Helmet>
            <meta charSet="utf-8" />
            <meta name="title" content="Exclusive Proxies for Market Research | Why Lime Proxies"/>
            <meta name="description" content="LimeProxies provide proxy services for all sizes of organisations and personal needs. We offer proxies from every single country and every city in the world." />
            <meta name="keywords" content="proxy, vpn proxy, proxies" />
            <link rel="canonical" href={`${siteUrl}${finalPath}`} />
            <title>{post.meta_title} | Why Lime Proxies</title>
          </Helmet>

        <Header />

        <section className="why-hero">
          <div className="ui container">
            <div className="why-hero__wrapper">
              <div className="why-hero__info">
                <h1 className="why-hero__title t-h1">
                  {post.maintitle} <span className="t-blue">{post.subtitle}</span>
                </h1>
                <p className="why-hero__text t-p-lg">{post.titledescription}</p>
                <Link to="/pricing" className="why-hero__button btn btn--wob btn--lg">Get Started for free</Link>
              </div>
              <div className="why-hero__pic">
                <ImageObserver src={post.bannerimage}/>
              </div>
            </div>
          </div>
        </section>

        <section className="why-reasons">
          <div className="ui container">
            <div className="why-reasons__wrapper">
              { post.section2.map((item) => {
                return (
                <div key={item.title} className="why-reasons__item">
                  <div className="why-reasons__icon">
                    <ImageObserver src={item.section2content.icon} />
                  </div>
                  <h2 className="why-reasons__title t-h3">{item.section2content.icontitle}</h2>
                  <p className="why-reasons__text">{item.section2content.icondescription}</p>
                </div>
              )})}
              
            </div>
          </div>
        </section>

        <section className="why-use">
          <div className="ui container">
            <h2 className="why-use__header t-h2 t-center">How People use our proxy service</h2>
            <div className="why-use__wrapper">
              { post.section3.map((item) => (
                <div key={item.section3content.section3title} className="why-use__item">
                  <div className="why-use__icon">
                    <ImageObserver src={item.section3content.section3icon} />
                  </div>
                  <div className="why-use__info">
                    <h3 className="why-use__title t-h4">{item.section3content.section3icontitle}</h3>
                    <p className="why-use__text">{item.section3content.section3icondescription}</p>
                  </div>
                </div>
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

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        meta_title
        yoast_keyword
        description
        path
        maintitle
        subtitle
        titledescription
        bannerimage
        section2 {
          section2content {
            icon
            icontitle
            icondescription
          }
        }
        section3title
        section3 {
          section3content {
            section3icon
            section3icontitle
            section3icondescription
          }
        }
      }
    },
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
