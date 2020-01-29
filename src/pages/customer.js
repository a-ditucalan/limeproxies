import React, {Component} from 'react';
import { Button } from 'semantic-ui-react'
import bg from "../images/customer-bg.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import Header from '../layout/header'
import Footer from '../layout/footer'
import SectionStarted from '../layout/section-started'
import {Helmet} from "react-helmet"
export default class Customer extends Component {

componentDidMount() {
  window.analytics.page('Customers | Subscriptions for Businesses  | Limeproxies');
}


render() {
  const data = this.props.data; 
  const siteUrl = data.site.siteMetadata.siteUrl

return (
<main className="customer">
  <Helmet>
    <meta charSet="utf-8" />

    <meta name="title" content="Customers | Subscriptions for Businesses  | Limeproxies"/>
    <meta name="description" content="Limeproxies powers subscriptions for businesses of all sizes. Powering subscriptions for 7000+ companies. Make your web surfing happier and easy today." />
    <meta name="keywords" content="customer proxy" />

    <link rel="canonical" href={`${siteUrl}customer`} />
    <title>Customers | Proxy Subscriptions for Businesses  | Limeproxies</title>
  </Helmet>
  <Header/>
  <div className="customer-banner"  style={{backgroundImage:  'url('+ bg +')'}}>
  <div className="ui container">
    <div className="customer-banner__title">
      <h1 className="title">Limeproxies powers subscriptions for businesses of all sizes.</h1>
    </div>
    <div className="customer-banner__signup">
      <Button className="customer-banner__signup--button">
      Sign up for free
      </Button>
      <p className="customer-banner__signup--text">Talk to us!</p>
    </div>
  </div>
</div>
<div className="customer__content ui container">
  <div className="customer__content--first">
    <div className="customer__content--first-left">
      <div className="tapadoo">
        <div className="tabadoo__logo">
          <img className="tapadoo__logo--logo" src={require('../images/tapadoo.png')} alt="img"/>
        </div>
        <p className="tapadoo__testimonial">
          Lorem ipsum dolor sit amet,<span> consectetuer
          adipiscing elit, sed diam </span>nonummy tinci-
          dunt sed diam nonummy nibh euis
        </p>
        <div className="tapadoo__ceo">
          <img className="tapadoo__ceo--img" src={require('../images/tapadoo-ceo.png')} alt="img"/>
          <p className="tapadoo__ceo--name">tapadoo.com, Founder & CEO</p>
        </div>
      </div>
    </div>
    <div className="customer__content--first-right">
      <div className="float-card">
        <div className="float-card--logo">
          <img className="float-card--logo-logo" src={require('../images/tapadoo-white.png')} alt="img"/>
        </div>
        <p className="float-card--text">
          Lorem ipsum dolor sit amet, con-
          sectetuer adipiscing elit, sed diam
          nonummy tincidunt
        </p>
        <p className="float-card--read">
          READ The Story
          <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/>
        </p>
      </div>
    </div>
  </div>
  <div className="customer-logo">
    <div className="customer-logo-icon">
      <img src={require('../images/addpeople.png')} alt="img"/>
    </div>
    <div className="customer-logo-icon">
      <img src={require('../images/razorsocial.png')} alt="img"/>
    </div>
    <div className="customer-logo-icon">
      <img src={require('../images/60sec.png')} alt="img"/>
    </div>
    <div className="customer-logo-icon">
      <img src={require('../images/optin.png')} alt="img"/>
    </div>
    <div className="customer-logo-icon">
      <img src={require('../images/datalytics.png')} alt="img"/>
    </div>
  </div>
  <div className="customer-travelmedia">
    <div className="customer-travelmedia__card">
      <div className="card-divider">
      </div>
      <div className="travel-media-holder">
        <img className="travelmedia-logo" src={require('../images/travelmedia-right.png')} alt="img"/>
        <p className="travelmedia-text">
          Lorem ipsum dolor sit
          amet, consectetuer
        </p>
        <p className="travelmedia-read">
          READ THE STORY
          <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/>
        </p>
      </div>
    </div>
    <div className="customer-travelmedia__right">
      <img className="travelmedia-logo-right" src={require('../images/travelmedia.png')} alt="img"/>
      <p className="travelmedia-text-right">
        Lorem ipsum dolor sit amet,
        consectetuer adipiscing elit, sed
        diam nonummy nibh euismod tinci-
        dunt ut laoreet dolore.
      </p>
      <div className="ceo-holder">
        <img className="tapadoo-ceo-img" src={require('../images/tapadoo-ceo.png')} alt="img"/>
        <p className="travelmedia-ceo-name">
          tapadoo.com, Founder & CEO
        </p>
      </div>
    </div>
  </div>
  <div className="customer-logo-2">
    <div className="customer-logo-2-icon-2">
      <img src={require('../images/social.png')} alt="img"/>
    </div>
    <div className="customer-logo-2-icon-2">
      <img src={require('../images/market.png')} alt="img"/>
    </div>
    <div className="customer-logo-2-icon-2">
      <img src={require('../images/datalyt.png')} alt="img"/>
    </div>
    <div className="customer-logo-2-icon-2">
      <img src={require('../images/agora.png')} alt="img"/>
    </div>
  </div>
  <div className="customer-card">
						<div className="customer-card-holder">
							<img className="customer-card-logo" src={require('../images/addpeople.png')} alt="logo"/>
							<p className="customer-card-text">Lorem ipsum dolor sit amet, con- sectetuer adipiscn.</p>
							<p className="customer-card-read">Read The Story <span> <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/></span></p>
						</div>
						<div className="customer-card-holder">
							<img className="customer-card-logo" src={require('../images/datalyt.png')} alt="logo"/>
							<p className="customer-card-text">Lorem ipsum dolor sit amet, con- sectetuer adipiscn.</p>
							<p className="customer-card-read">Read The Story <span> <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/></span></p>
						</div>
						<div className="customer-card-holder">
							<img className="customer-card-logo" src={require('../images/agora.png')} alt="logo"/>
							<p className="customer-card-text">Lorem ipsum dolor sit amet, con- sectetuer adipiscn.</p>
							<p className="customer-card-read">Read The Story <span> <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/></span></p>
						</div>
						<div className="customer-card-holder">
							<img className="customer-card-logo" src={require('../images/social.png')} alt="logo"/>
							<p className="customer-card-text">Lorem ipsum dolor sit amet, con- sectetuer adipiscn.</p>
							<p className="customer-card-read">Read The Story <span> <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/></span></p>
						</div>
						<div className="customer-card-holder">
						<img className="customer-card-logo-up" src={require('../images/addpeople.png')} alt="logo"/>
							<img className="customer-card-logo" src={require('../images/market.png')} alt="logo"/>
							<p className="customer-card-text">Lorem ipsum dolor sit amet, con- sectetuer adipiscn.</p>
							<p className="customer-card-read">Read The Story <span> <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/></span></p>
						</div>
						<div className="customer-card-holder">
							<img className="customer-card-logo" src={require('../images/datalytics.png')} alt="logo"/>
							<p className="customer-card-text">Lorem ipsum dolor sit amet, con- sectetuer adipiscn.</p>
							<p className="customer-card-read">Read The Story <span> <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/></span></p>
						</div>
						<div className="customer-card-holder">
							<img className="customer-card-logo" src={require('../images/60sec.png')} alt="logo"/>
							<p className="customer-card-text">Lorem ipsum dolor sit amet, con- sectetuer adipiscn.</p>
							<p className="customer-card-read">Read The Story <span> <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/></span></p>
						</div>
						<div className="customer-card-holder">
							<img className="customer-card-logo" src={require('../images/optin.png')} alt="logo"/>
							<p className="customer-card-text">Lorem ipsum dolor sit amet, con- sectetuer adipiscn.</p>
							<p className="customer-card-read">Read The Story <span> <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/></span></p>
						</div>
					</div>
  <div className="subscription">
    <p className="subscription-title">Powering subscriptions for 7000+ companies</p>
    <div className="subscription-logo">
      <div className="subscription-logo-holder">
        <img className="subscription-logo-holder-img" src={require('../images/vhdigitak-black.png')} alt="logo"/>
      </div>
      <div className="subscription-logo-holder">
        <img className="subscription-logo-holder-img" src={require('../images/distinctly-black.png')} alt="logo"/>
      </div>
      <div className="subscription-logo-holder">
        <img className="subscription-logo-holder-img" src={require('../images/razorsocial-black.png')} alt="logo"/>
      </div>
      <div className="subscription-logo-holder">
        <img className="subscription-logo-holder-img" src={require('../images/social-black.png')} alt="logo"/>
      </div>
      <div className="subscription-logo-holder">
        <img className="subscription-logo-holder-img" src={require('../images/agora-black.png')} alt="logo"/>
      </div>
      <div className="subscription-logo-holder">
        <img className="subscription-logo-holder-img" src={require('../images/datalytics-black.png')} alt="logo"/>
      </div>
      <div className="subscription-logo-holder">
        <img className="subscription-logo-holder-img" src={require('../images/optin-black.png')} alt="logo"/>
      </div>
    </div>
    <Button className="subscription-viewmore">
      View more customers
      <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/>
    </Button>
    <p className="subscription-seehow">
      See how Chargebee <span>compares with others</span>
      <FontAwesomeIcon className="right-long-arrow" icon={faLongArrowAltRight}/>
    </p>
  </div>
</div>
<SectionStarted/>
<Footer/>
</main>
)
}
}

export const query = graphql`
  query customer {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`