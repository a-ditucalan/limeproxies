import React from 'react'

import { Helmet } from 'react-helmet'
// import { Button } from 'semantic-ui-react'
import Script from 'react-load-script'

import Header from '../layout/header'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

export default class Quotes extends React.Component {
  componentDidMount() {
    window.analytics.page('Premium Proxy | Get A Demo On Proxy Solutions | LimeProxies', {
      name: 'Get a Demo',
      title: "Premium Proxy | Get A Demo On Proxy Solutions | LimeProxies",
    });
  }
  
  render() {
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

		return (
			<main className="quote">
			  <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content="Get A Demo |  Buy Our Proxy for your Business | LimeProxies"/>
          <meta name="description" content="LimeProxies offers reliable, high speed premium and private proxies.  We have millions of Premium Private IPs that never get blocked.  Contact us to get a demo." />
          <meta name="keywords" content="premium proxy service, secure proxy service, commercial proxy services" />
          <link rel="canonical" href={`${siteUrl}get-a-demo`} />
          <title>Get A Demo |  Buy Our Proxy for your Business | LimeProxies</title>
        </Helmet>

				<Header/>

				<section className="quote__banner">
					<img className="quote__bg" src={require('../images/demo-banner.png')} alt="" />
					<div className="ui container">
						<div className="quote__banner-info">
							<h1 className="t-h1">Get a Demo</h1>
							<h2 className="t-p-lg">Get personalized Demo for better understanding</h2>
							{/* <Button className="banner-button">Contact sales</Button> */}
						</div>
					</div>
				</section>

				<section className="quote__contact ui container">
					{/* <div className="quote__contact--title">
						<p className="quote__contact--title-text">Contact Us</p>
					</div>
					<p className="quote__contact--desc">
						Just just fill out this form and we'll put you in touch with the right team.
					</p> */}

					{/* <ContactForm /> */}

				  <div className="pt-5"></div>
					<div className="meetings-iframe-container" data-src="https://app.hubspot.com/meetings/limeproxies/30-minutes-demo?embed=true"></div>
					<Script
						url="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
						onLoad={() => { console.log('loaded script')}}
					/>

					{/* <div className="t-p" style={{
						width: '100%', 
						height: '500px', 
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '50px',
						backgroundColor: '#f4f7f9'}}>Embedded Link Here</div> */}
				</section>

				<SectionStarted/>
				<Footer/>
			</main>
		)
  }
}
export const query = graphql`
  query getademo {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`