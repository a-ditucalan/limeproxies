import React, { Component } from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faInstagram,
  faFacebookF,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

import ImageObserver from '../layout/observer-image-target'

export default class Footer extends Component {
  // state = { activeIndex: 4 }

  // getStateData = () => {
  //   const { activeIndex } = this.state
  //   console.log(activeIndex)
  //   return  activeIndex;
  // }

  // onSubmit = () => {
  //   const data = this.getStateData();
  //   // console.log(data)
  //   return  this.props.handleData(data);
  // }

  // componentDidMount() {
  //   console.log(this.props);
  // }

 

  twitterClick = () => {
    window.analytics.track('Twitter Page Redirect',{
      location: "Footer",
      color: "White",
      Icon: "Twitter",
      CTA: "https://twitter.com/limeproxies",
    });
  }

  instagramClick = () => {
    window.analytics.track('Instagram Page Redirect',{
      location: "Footer",
      color: "White",
      Icon: "Instagram",
      CTA: " https://www.instagram.com/limeproxies/",
    });
  }

  youtubeClick = () => {
    window.analytics.track('Youtube Channel Redirect',{
      location: "Footer",
      color: "White",
      Icon: "Youtube",
      CTA: " https://www.youtube.com/channel/UCmRhZT7mgQAMc_A_ekDDydA",
    });
  }

  numberCta = () => {
    window.analytics.track('CTA Clicked',{
      location: 'Footer',
      text: '+1 (936) 342-7014',
      CTA: 'Tel Number',
      type: 'Link'
    });
  }

  facebookClick = () => {
    window.analytics.trackLink('Facebook Page Redirect',{
      location: "Footer",
      color: "White",
      Icon: "Facebook",
      CTA: "https://www.facebook.com/limeproxiesonline/",
    });
  }

  render() {
    return (
      <footer className="footer show_desctop">
        <div className="footer_desktop">
          <div className="footer__contacts footer_contacts">
            <div className="ui container">
              <div className="footer_contacts__item footer_contacts_item">
                <Link to="/support">
                <ImageObserver className="icon" src={require("../images/icon_support.svg")} altString="Icon" />
                 <span> Quick Support 24 x 7 X 365 </span>
                <ImageObserver className="arrow" src={require("../images/icon_right_arrow.svg")} altString="Icon" />
                </Link>
              </div>
              <div className="footer_contacts__item footer_contacts_item">
                <a href="https://status.limeproxies.com" target="_blank">
                <ImageObserver className="icon" src={require("../images/icon_uptime.svg")} altString="Icon" />
                <span> 99.99 % Up time </span>
                <ImageObserver className="arrow" src={require("../images/icon_right_arrow.svg")} altString="Icon" />
                </a>
              </div>
              <div className="footer_contacts__item footer_contacts_item">
                <Link to="/locations">
                <ImageObserver className="icon" src={require("../images/icon_secure.svg")} altString="Icon" />
                  <span> 50+ Global Locations </span>
                <ImageObserver className="arrow" src={require("../images/icon_right_arrow.svg")} altString="Icon" />
                </Link>
              </div>
            </div>
          </div>
          <div className="footer__menu footer_menu">
            <div className="ui container">
              <div className="footer_menu__item">
                <h3 className="title">Limeproxies</h3>
                <ul>
                  <li><Link to="/features">Features</Link></li>
                  {/* <li><Link to="/why-limeproxies">Why Limeproxies</Link></li> */}
                  <li><Link to="/affiliate">Affiliates</Link></li>
                  <li><Link to="/pricing">Pricing</Link></li>
                  <li><Link to="/get-a-demo">Get a Demo</Link></li>
                  <li><Link to="/locations">Proxy Locations</Link></li>
                </ul>
              </div>
              <div className="footer_menu__item">
                <h3 className="title">Use Case</h3>
                <ul>
                  <li><Link to="/proxy-for-seo">Rank Tracking</Link></li>
                  <li><Link to="/sales-intelligence">Sales Intelligence</Link></li>
                  <li><Link to="/proxy-for-price-tracking">Price Tracking</Link></li>
                  <li><Link to="/proxy-for-web-scrapping">Web Scrapping</Link></li>
                  <li><Link to="/ad-verification-proxy-network">Ad Verification</Link></li>
                </ul>
              </div>
              <div className="footer_menu__item d-none d-sm-block">
                <h3 className="title">Locations</h3>
                <ul>
                  <li><Link to="/private-proxies/uk-proxies">UK Proxies</Link></li>
                  <li><Link to="/private-proxies/australia-proxies">Australia Proxies</Link></li>
                  <li><Link to="/private-proxies/germany-proxies">Germany Proxies</Link></li>
                  <li><Link to="/private-proxies/brazil-proxies">Brazil Proxies</Link></li>
                  <li><Link to="/private-proxies/india-proxies">India Proxies</Link></li>
                </ul>
              </div>
              <div className="footer_menu__item">
                <h3 className="title">Resources</h3>
                <ul>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><a href="http://help.limeproxies.com" target="_blank" rel="noopener noreferrer">Knowledgebase</a></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer">Network Status</a></li>
                  <li><a href="http://help.limeproxies.com/en/collections/84871-how-to-use-guides" target="_blank">How to Proxy Guide</a></li>
                  <li><Link to="/api">API Documentation</Link></li>
                </ul>
              </div>
              <div className="footer_menu__item">
                <h3 className="title">Company</h3>
                <ul>
                  <li><Link to="/about">About us</Link></li>
                  <li><Link to="/">Customers</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                  <li><Link to="/">Testimonials</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom footer_bottom">
            <div className="ui container">
              <div className="footer_bottom__socials footer_socials">
                <ul>
                  <li>
                    <a target="_blank" href="https://www.facebook.com/limeproxiesonline/" rel="noopener noreferrer" onClick={this.facebookClick}>
                    <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/limeproxies" rel="noopener noreferrer" onClick={this.twitterClick}>
                    <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.instagram.com/limeproxies/" rel="noopener noreferrer" onClick={this.instagramClick}>
                    <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.youtube.com/channel/UCmRhZT7mgQAMc_A_ekDDydA" rel="noopener noreferrer" onClick={this.youtubeClick}>
                    <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__copyright footer_copyright">
            <div className="ui container d-flex flex-wrap">
              <div className="footer_copyright__text">
                <p>Ⓒ Copyright 2019 Limeproxies.com</p>
              </div>
              <div className="footer_copyright__nav d-none d-md-block">
                <ul>
                  <li><Link to="/terms">Terms</Link></li>
                  <li><Link to="/privacy">Privacy Policy</Link></li>
                  <li><Link to="/gdpr">GDPR</Link></li>
                  <li><Link to="/refund">Refund Policy</Link></li>
                  <li><Link to="/security">Security</Link></li>
                  <li><Link to="/sla">SLA</Link></li>
                </ul>
              </div>
              <div className="footer_copyright__phone">
                <a href="tel:+19363427014" onClick={this.numberCta}>
                  <FontAwesomeIcon icon={faPhone} />
                  +1 (936) 342-7014
                </a>
                <ImageObserver className="blue-phone-icon" src={require("../images/blue-phone-con.png")} altString="Phone Icon"/>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="footer__mobile">
          <div className="footer__mobile-wrapper">
            <ul className="footer__mobile-list">
              <li className="footer__item"><Link to="/">Support</Link></li>
              <li className="footer__item"><Link to="/">Company</Link></li>
              <li className="footer__item"><Link to="/">Solution</Link></li>
              <li className="footer__item"><Link to="/">My account</Link></li>
              <li className="footer__item"><Link to="/">Back To Top</Link></li>
            </ul>
          </div>
          <div className="footer_bottom__socials bottom_socials footer_socials">
            <ul className="social-list">
              <li className="social-item">
                <a target="_blank" href="https://www.facebook.com/limeproxiesonline/" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li className="social-item">
                <a target="_blank" href="https://twitter.com/limeproxies" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="social-item">
                <a target="_blank" href="https://www.instagram.com/limeproxies/" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="social-item">
                <a target="_blank" href="https://www.youtube.com/channel/UCmRhZT7mgQAMc_A_ekDDydA" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
            <div className="footer_copyright__text">
              <p className="copy-right">Ⓒ Copyright 2019 Limeproxies.com</p>
              <div className="privacy-wrapper">
                <Link to="/privacy" className="privacy-text">Privacy </Link> +
                <Link to="/terms" className="terms-text"> terms </Link>
              </div>
            </div>
          </div>
        </div> */}
      </footer>
    )
  }
}