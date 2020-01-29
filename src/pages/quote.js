import React from 'react'

import { Helmet } from 'react-helmet'
// import { Button } from 'semantic-ui-react'

import Header from '../layout/header'
import ContactForm from '../layout/generic-contact-form'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

export default class Quotes extends React.Component {

  componentDidMount() {
    window.analytics.page('Get a Personalized Quote | Limeproxies');
  }
  
  render() {
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl
		return (
			<main className="quote">
			  <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content="Get A Personalized Quote For Proxies | Limeproxies"/>
          <meta name="description" content="Get a Quote - Get personalized quote for personalized requirements. Make your web surfing happier and easy today. Contact  LimeProxies  Now!" />
          <meta name="keywords" content="private proxy service" />

          <link rel="canonical" href={`${siteUrl}quote`} />
					<title>Get A Personalized Quote For Proxies | Limeproxies</title>
				</Helmet>

				<Header/>

				<section className="quote__banner">
					<img className="quote__bg" src={require('../images/featured-contact.png')} alt="" />
					<div className="ui container">
						<div className="quote__banner-info">
							<h1 className="t-h1">Get a Quote</h1>
							<p className="t-p-lg">Get personalized quote for personalized requitements</p>
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

					<ContactForm />
				</section>

				<SectionStarted/>
				<Footer/>
			</main>
		)
  }
}

export const query = graphql`
  query quote {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

