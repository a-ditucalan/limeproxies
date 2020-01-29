import React, { Component } from 'react'
import { Link } from 'gatsby'

import { Menu } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'
import RangeSlider from '../layout/range-slider'
import classNames from 'classnames'
// import Swiper from 'react-id-swiper'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import CustomePopup from '../layout/pricing-custome-popup'
import BuyNowPopup from '../layout/buy-now-popup'
import SectionAccordion from '../layout/faq-accordion'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

export default class Pricing extends Component {
  state = {
    activeItem: 'Live support',
    activeMod: false,
    activePricingModal: false,
    activeBuyModal: false,
    proxyCount: 10
  }

  timeouts = []

  buttonPressed = (newActive) => {
    this.clearTimeouts()
    
    if (this.state.activeMod === newActive) {
      this.setState({ activeMod: -1 })
    } else {
      this.setState({ activeMod: newActive })
      this.timeouts.push(setTimeout(() => {
        this.setState({ activeMod: -1 })
      }, 5000))
    }   
  };

  clearTimeouts = () => { this.timeouts.forEach(clearTimeout) }

  componentWillUnmount() { this.clearTimeouts() }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  toggleModal = () => {  this.setState({ activePricingModal: !this.state.activePricingModal }) }

  toggleBuy = () => {  this.setState({ activeBuyModal: !this.state.activeBuyModal }) }

  handleFormSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for contacting us! We\'ll get back to you soon');
    this.setState({ activePricingModal: false });
  }

  renderLiveSupport = () => {
    return (
      <div className="pricing_tabs_item">
        <div className="pricing_tabs_item__img">
          <ImageObserver src={require("../images/img_tab_support.png")} />
        </div>
        <div className="pricing_tabs_item__text">
          <h3 className="title t-h2">Always on 24/7 Live Support</h3>
          <p>Every minute of application downtime means lost
            revenue, and a decrease in customer satisfaction.
            That’s why we have expert support engineers
            with a deep understanding of the technical  and
            business needs available 24/7 with 15 minute
            resolution guarantee.
          </p>
          <a className="t-h3" href="/pricing">Get help now <ImageObserver src={require("../images/icon_arrow_get.svg")} altString="Icon"/></a>
        </div>
      </div>
    )
  }

  renderNetwork = () => {
    // let params = {
    //   slidesPerView: 1,
    //   slidesPerGroup: 1,
    //   loop: true,
    //   loopFillGroupWithBlank: true,
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   },
    //   containerClass: 'swiper-container swiper-network'
    // }

    return (
      <div className="pricing_tabs_item">
        <div className="pricing_tabs_item__img">
          <ImageObserver src={require("../images/network-live.png")} />
        </div>
        <div className="pricing_tabs_item__text">
          <h3 className="title t-h2">Always on 24/7 Live Support</h3>
          <p>
            Every minute of application downtime means lost revenue, and a decrease in customer satisfaction. That’s why we have expert support engineers with a deep understanding of the technical and business needs available 24/7 with 15 minute resolution guarantee.
          </p>
          <a className="t-h3" href="/pricing">Get help now <ImageObserver src={require("../images/icon_arrow_get.svg")} altString="Icon"/></a>
        </div>
      </div>
    )
  }

  renderBandwidth = () => {
    return (
      <div className="pricing_tabs_item">
        <div className="pricing_tabs_item__img">
          <ImageObserver src={require("../images/img_tabs_bandwidth.png")} />
        </div>
        <div className="pricing_tabs_item__text">
          <h3 className="title t-h2">10TB Bandwidth</h3>
          <p>All our standard plans comes with 10TB bandwidth with lightning fast proxy network.</p>
          <a className="t-h3" href="/pricing">View all Plans <ImageObserver src={require("../images/icon_arrow_get.svg")} altString="Icon"/></a>
        </div>
      </div>
    )
  }

  renderIPRefresh = () => {
    return (
      <div className="pricing_tabs_item">
        <div className="pricing_tabs_item__img">
          <ImageObserver src={require("../images/img_tab_refresh.png")} />
        </div>
        <div className="pricing_tabs_item__text">
          <h3 className="title t-h2">Instant Fresh IPs</h3>
          <p>No worries about IP blocks anymore. With our
            fully automated IP refresh feature, you can switch
            your IPs to brand new ones round the clock.
          </p>
          <a className="t-h3" href="/pricing">See all available IP’s <ImageObserver src={require("../images/icon_arrow_get.svg")} altString="Icon"/></a>
        </div>
      </div>
    )
  }

  renderConnections = () => {
    return (
      <div className="pricing_tabs_item">
        <div className="pricing_tabs_item__img">
          <ImageObserver src={require("../images/img_tab_connect.png")} />
        </div>
        <div className="pricing_tabs_item__text">
          <h3 className="title t-h2">Flexible Concurrent sessions</h3>
          <p>
            Unlike competitors, we do not limit concurrent sessions. Every proxy account comes with a 50 concurrent connections limit which can be extended upto 100,000 based on your proxy order count for free.
          </p>
          <a className="t-h3" href="/pricing">
            Check your connection <ImageObserver src={require("../images/icon_arrow_get.svg")} altString="Icon"/>
          </a>
        </div>
      </div>
    )
  }

  componentDidUpdate() {
    this.state.activePricingModal ?
      document.getElementsByTagName('body')[0].classList.add('constricted')
      : document.getElementsByTagName('body')[0].classList.remove('constricted');

    this.state.activeBuyModal ?
      document.getElementsByTagName('body')[0].classList.add('constricted')
      : document.getElementsByTagName('body')[0].classList.remove('constricted');
      
  }

  componentDidMount() {
    window.analytics.page('Premium and Private Proxies Pricing | LimeProxies', {
      name: 'Pricing',
      title: "Premium and Private Proxies Pricing | LimeProxies",
    });
  }

  setProxyCount = (params) => {
    this.setState({ proxyCount: params })
  }

  render() {
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

    const {
      activeItem,
      activeMod,
      proxyCount
    } = this.state

    // console.log(this.state.proxyCount)

    let finalPrice = 0

    if (proxyCount >= 10) { finalPrice = 9.99 }
    if (proxyCount >= 25) { finalPrice = 24.99 }
    if (proxyCount >= 100) { finalPrice = 99.99 }
    if (proxyCount >= 250) { finalPrice = 249.99 }
    if (proxyCount >= 500) { finalPrice = 499 }
    if (proxyCount >= 1000) { finalPrice = 750 }
    if (proxyCount >= 2500) { finalPrice = 1750 }


    return (
      <main className="pricing">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content="Buy Our Proxy for your Specific Needs | LimeProxies Pricing"/>
          <meta name="description" content="Lime Proxies offers the best private proxy services in the industry, with 50+ locations, 211+ subnets and blistering 1 gbps speed. Check price and buy online today!" />
          <meta name="keywords" content="free proxy service, online proxy service, best paid proxy service" />
          <link rel="canonical" href={`${siteUrl}pricing`} />
          <title>Buy Our Proxy for your Specific Needs | LimeProxies Pricing</title>
        </Helmet>

        <Header/>

        <div className={classNames("pricing-modal", { active: this.state.activePricingModal })}>
          <div className="pricing-modal__overlay" onClick={this.toggleModal}></div>
          <CustomePopup callback={this.toggleModal} />
        </div>

        <div className={classNames("pricing-modal", { active: this.state.activeBuyModal })}>
          <div className="pricing-modal__overlay" onClick={this.toggleBuy}></div>
          <BuyNowPopup callback={this.toggleBuy} finalPrice={finalPrice} count={this.state.proxyCount}/>
        </div>

        <section className="pricing_header">
          <div className="ui container d-flex">
            <div className="pricing_header__title">
              <h1 className="title t-h1">Simple and transparent pricing</h1>
              <RangeSlider callback={this.setProxyCount}/>
            </div>
          </div>
        </section>

        <section className="pricing_header__box pricing_header_box pricing_header__plans">
          <div className="pricing_header_box__top pricing_header_box_top">
            <div className="pricing_header_box_top__text">
              <h2 className="title t-h2">
                Premium
                <span className="t-h1">${finalPrice}<b>/mo</b></span>
              </h2>
            </div>
            <div className="pricing_header_box_top__Icon">
              {/* <img src={require("../images/icon_pricing_custom.svg")} alt="Icon"/> */}
              <img className="windmill" src={require("../images/windmill.gif")} alt="Icon"/>
            </div>
          </div>
          <div className="pricing_header_box__wrapper pricing_header_box_wrap">
            <div className="pricing_header_box_wrap__list">
              <ul className="align_left">
                <li>
                  <span className="list-item">
                    <img src={require("../images/icon_plus.svg")} alt="Icon" onClick={() => this.buttonPressed(1)}/>
                    Virgin IPs
                    <div className={activeMod === 1 ? "text_modal active-mod" : "text_modal"}>
                      <h4 className="title">Virgin IPs </h4>
                      <p>The IP's which are not used.</p>
                    </div>
                  </span>
                </li>
                <li><span className="list-item">50+ concurrent threads</span></li>
                <li><span className="list-item">1 Gbps Blistering Speed</span></li>
                <li>
                  <span className="list-item">
                    <img src={require("../images/icon_plus.svg")} alt="Icon" onClick={() => this.buttonPressed(2)}/>
                    1 Locations Covered
                    <div className={activeMod === 2 ? "text_modal active-mod" : "text_modal"}>
                      <h4 className="title">1 Locations Covered</h4>
                      <p>It is IP location Used for Proxy</p>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="list-item">
                    <img src={require("../images/icon_plus.svg")} alt="Icon" onClick={() => this.buttonPressed(3)}/>
                    1 Subnet covered
                    <div className={activeMod === 3 ? "text_modal active-mod" : "text_modal"}>
                      <h4 className="title">1 Subnet covered</h4>
                      <p>Subnet is a logical subdivision of an IP network
We provide multiple subnets for a single location.</p>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="list-item">
                    <img src={require("../images/icon_plus.svg")} alt="Icon" onClick={() => this.buttonPressed(4)}/>
                    Multiple IP Class
                    <div className={activeMod === 4 ? "text_modal active-mod" : "text_modal"}>
                      <h4 className="title">Multiple IP Class</h4>
                      <p>From All IP Classes - A, B, C, D</p>
                    </div>
                  </span>
                </li>
                <li><span className="list-item">Reliable 24/7 Service</span></li>
              </ul>
              <div className="pricing-btn-wrapper">
                <button onClick={this.toggleBuy} className="btn-lg-blue pricing-btn">Try now</button>
                <button onClick={this.toggleBuy} className="btn_bow pricing-btn">Buy now</button>
              </div>
            </div>
            <div className="pricing_header_box_wrap__info">
              <p>To order more than 1000 proxies, please contact sales. We are able to provide up to 10,000 proxies on instant setup</p>
              <p>We provide plans for all sizes and needs</p>
              <div onClick={this.toggleModal} className="btn_bow">Contact Sales</div>
            </div>
          </div>
        </section>
        <section className="pricing_tabs">
          <div className="ui container">
            <Menu className=" ui tabular menu">
              <Menu.Item name='Live support'
                active={activeItem === 'Live support'}
                onClick={this.handleItemClick}>
                <ImageObserver src={require("../images/icon_tab_support_grey.svg")} altString="Icon"/>
                <ImageObserver src={require("../images/icon_tab_support_blue.svg")} altString="Icon"/>
                <div className="tab-text">Live support</div>
              </Menu.Item>

              <Menu.Item name='Network'
                active={activeItem === 'Network'}
                onClick={this.handleItemClick}>
                <ImageObserver src={require("../images/icon_tab_network_grey.svg")} altString="Icon"/>
                <ImageObserver src={require("../images/icon_tab_network_blue.svg")} altString="Icon"/>
                <div className="tab-text">Network</div>
              </Menu.Item>

              <Menu.Item name='Bandwidth'
                active={activeItem === 'Bandwidth'}
                onClick={this.handleItemClick}>
                <ImageObserver src={require("../images/icon_tab_band_grey.svg")} altString="Icon"/>
                <ImageObserver src={require("../images/icon_tab_band_blue.svg")} altString="Icon"/>
                <div className="tab-text">Bandwidth </div>
              </Menu.Item>

              <Menu.Item name='IP Refresh'
                active={activeItem === 'IP Refresh'}
                onClick={this.handleItemClick}>
                <ImageObserver src={require("../images/img_tab_refresh_grey.svg")} altString="Icon"/>
                <ImageObserver src={require("../images/img_tab_refresh_blue.svg")} altString="Icon"/>
                <div className="tab-text">IP Refresh </div>
              </Menu.Item>

              <Menu.Item name='Connections'
                active={activeItem === 'Connections'}
                onClick={this.handleItemClick}>
                <ImageObserver src={require("../images/icon_tabs_connect_grey.svg")} altString="Icon"/>
                <ImageObserver src={require("../images/icon_tabs_connect_blue.svg")} altString="Icon"/>
                <div className="tab-text">Connections </div>
              </Menu.Item>

            </Menu>
            <div className="ui tab active" data-tab="tab-support">
              {
                activeItem === 'Live support' ? this.renderLiveSupport() :
                activeItem === 'Network' ? this.renderNetwork() :
                activeItem === 'Bandwidth' ? this.renderBandwidth() :
                activeItem === 'IP Refresh' ? this.renderIPRefresh() :
                activeItem === 'Connections' ? this.renderConnections() :
                null
              }
            </div>
          </div>
        </section>
        <section className="pricing_faq">
          <div className="ui container">
            <div className="pricing_faq__title">
              <h2 className="title t-h2">Maybe we’ve already answer your question, here’s our FAQ</h2>
              <ImageObserver src={require("../images/icon_pricing_faq.svg")} />
            </div>

            <SectionAccordion />

          </div>
        </section>

        <section className="logo_showcase">
          <div className="ui container">
            <div className="logo_showcase__title">
              <h2 className="title t-h2">Trusted by known and reputeted companies</h2>
            </div>
            <div className="logo_showcase__logo logo_showcase_logo">
              <div className="logo_showcase_logo__item">
                <ImageObserver src={require("../images/logo_labs.png")} />
              </div>
              <div className="logo_showcase_logo__item">
                <ImageObserver src={require("../images/logo_webposition.png")} />
              </div>
              <div className="logo_showcase_logo__item">
                <ImageObserver src={require("../images/logo_booking.png")} />
              </div>
              <div className="logo_showcase_logo__item">
                <ImageObserver src={require("../images/logo_hotels.png")} />
              </div>
            </div>
          </div>
        </section>

        <SectionStarted/>

        <Footer/>
      </main>
    )
  }
}
export const query = graphql`
  query pricing {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`
