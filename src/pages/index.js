import React, { Component } from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import { Menu } from 'semantic-ui-react'
import Swiper from 'react-id-swiper'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import SectionCoverage from '../layout/section-coverage'
import SectionStarted from '../layout/section-started'
import SectionLove from '../layout/section-love'
import Footer from '../layout/footer'
import { Helmet } from 'react-helmet'

const homeUseCaseData = [
  {
    tabTitle: 'SEO Agencies & Keyword Ranking Software',
    bannerTitle: 'SEO Agencies & Keyword Ranking Software',
    bannerImg: require('../images/img_cases_1.svg'),
    descTitle: 'SEO Agencies & Keyword Ranking Software',
    text: "LimeProxies offers reliable, fast proxy srever to accelerate your keyword ranking software or other SEO efforts. Our private proxy solutions are customizable and scalable to suit any SEO professional, whether you are working with just a few clients or an entire portfolio. Our reliable proxy servers allow you to run keyword reports faster than ever-even for hundred or thousands of keywords-without a major investment",
    readMore: '/proxy-for-seo'
  },
  {
    tabTitle: 'Geo Surfing',
    bannerTitle: 'Geo Blocked Surfing',
    bannerImg: require('../images/icon_reasons_3.svg'),
    descTitle: 'International Geo Surfing',
    text: "LimeProxies’ international proxy services allow you to browse the web as if from anywhere in the world, enabling you to see local search results, run accurate international keyword reports, and get valuable marketing and business insights.",
    readMore: '/'
  },
  {
    tabTitle: 'Big-G Stealth Extractor',
    bannerTitle: 'Big-G Stealth Extractor',
    bannerImg: require('../images/img_cases_3.svg'),
    descTitle: 'Big-G Stealth Extractor',
    text: "The Big-G Stealth Extractor by LimeProxies enables you to send up to 600 Queries per Minute to Google–without being blocked or detected. Use the Big-G Stealth Extractor to run your favorite SEO software and get Google rankings 600+ times faster than normal.",
    readMore: '/'
  },
  {
    tabTitle: 'Web Scraping',
    bannerTitle: 'High Speed Web Scraping',
    bannerImg: require('../images/img_cases_4.svg'),
    descTitle: 'Proxy Servers for High Speed Web Scraping',
    text: "A reliable proxy server platform & API optimized for rapid web scraping—with- out being blocked. LimeProxies offers proxy solutions that are fast, secure, and scalable to meet your enterprise needs.",
    readMore: '/proxy-for-web-scrapping'
  },
  {
    tabTitle: 'Online Privacy',
    bannerTitle: 'Online Privacy',
    bannerImg: require('../images/img_cases_5.svg'),
    descTitle: 'Privatise Online Encryption',
    text: "Privatise Online Encryption delivers sophisticated, built-for-business online privacy protection, allowing you to encrypt your online communications between your device and the server or network you are connected to.",
    readMore: '/'
  }
]

const homeReasonsData = [
  {
    img: require("../images/icon_reasons_1.svg"),
    title: '1gbps speed',
    text: 'Our speeds are unmatched by any competitor. Try running even millions of concurrent sessions'
  },
  {
    img: require("../images/icon_reasons_1.svg"),
    title: '24/7 Live support',
    text: 'Round the clock customer support by chat, email and phone by experienced engineers.'
  },
  {
    img: require("../images/icon_reasons_2.svg"),
    title: 'Anytime IP Refresh',
    text: 'On-Demand IP Refresh available on all plans'
  },
  {
    img: require("../images/icon_reasons_2.svg"),
    title: '50+ Geo Locations',
    text: 'Choice of several international and US geo locations'
  },
  {
    img: require("../images/icon_reasons_3.svg"),
    title: 'Concurrent Threads',
    text: 'Works Great for high performance, multi threaded softwares. No time out issues'
  },
  {
    img: require("../images/icon_reasons_3.svg"),
    title: 'Self managed control panel',
    text: 'Order/manage your proxies, refresh and do everything automatically using our panel'
  },
]



export default class Home extends Component {
  state = {
    email: '',
    activeUseCaseIndex: 0
   
  }


  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { email } = this.state;
    const from = "Website banner email form";

    // Add your own unique ID here or we will automatically assign an anonymousID
    window.analytics.identify('',{
      email,
      from
    });
  }

  componentDidMount() {
    window.analytics.page('Homepage Visit', {
      name: 'Homepage',
      title: "Private Proxies | Best Proxy Service | Lime Proxies",
    });
  }


  handleUseCaseActive = (i) => this.setState({ activeUseCaseIndex: i })

  // renderHigh = () => {
  //   return (
  //     <div className="featues__tab">
  //       <div className="home_features_tab__item">
  //         <h3 className="title t-h3">High Speed & Performance</h3>
  //         <p>Storm Proxies' 1GB network is optimized for high performance and fast multi-threaded tools.</p>
  //       </div>
  //       <div className="home_features_tab__item">
  //         <h3 className="title t-h3">Private Dedicated Proxies</h3>
  //         <p>Premium private dedicated proxy. Optimized for tasks that requirehigh-speed fixed IP addresses.</p>
  //       </div>
  //       <div className="home_features_tab__item">
  //         <h3 className="title t-h3">Unlimited bandwidth</h3>
  //         <p>You get unlimited bandwidth. No hidden costs, no limits on bandwidth.</p>
  //       </div>
  //       <div className="home_features_tab__item">
  //         <h3 className="title t-h3">Automatic & Instant Delivery</h3>
  //         <p>Get instant access after payment - no waiting for account activation or proxies setup.</p>
  //       </div>
  //     </div>
  //   )
  // }

  // renderSEO = () => {
  //   return (
  //     <div className="home_cases_item">
  //       <div className="home_cases_item__top home_cases_top">
  //         <div className="home_cases_top__item">
  //           <h3 className="title">SEO Agencies &amp; keyword Ranking Software</h3>
  //           <img src={require("../images/img_cases_1.svg")} alt="Img"/>
  //         </div>
  //       </div>
  //       <div className="home_cases_item__title">
  //         <h3 className="title">Proxy Solutions for SaaS, Cloud, and App Developers</h3>
  //       </div>
  //       <div className="home_cases_item__text">
  //         <p>Limeproxie’s reliable, secure proxy server platform and API is built for rapid data extraction—without being blocked. Our private proxy solutions are customizable and scalable to meet the needs of complex SaaS development, cloud development, and app store optimization.</p>
  //       </div>
  //     </div>
  //   )
  // }

  // renderGeo = () => {
  //   return (
  //     <div className="home_features_tab__location">
  //       <img src={require("../images/img_features_2.jpg")} alt="Img"/>
  //       <p className="t-h4">Click here for <a href="#/">detailed locations</a></p>
  //     </div>
  //   )
  // }

  render() {
    // const params = {
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //     hide: true,
    //   }
    // };

    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

    const { email } = this.state;
    return (
      <main className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content="Private Proxies | Reliable VPN Proxy Server | LimeProxies"/>
          <meta name="description" content="LimeProxies offers reliable, high speed premium and private proxies.  We have millions of Premium Private IPs that never get blocked with an awesome support team." />
          <meta name="keywords" content="proxy server, vpn proxy server, proxy" />
          
          <link rel="canonical" href={siteUrl}/>
          <title>Private Proxies | Best Proxy Service | Lime Proxies</title>
        </Helmet>

        <Header/>
        <section className="home_header">
          <div className="ui container">
            <div className="home_header__wrapper home_header_wrap">
              <div className="home_header_wrap__item home_header_item">
                <h1 className="title t-h1">High speed Premium and <span>Private Proxies</span></h1>
                <p className="t-p-lg">Millions of Premium Private IPs that never get blocked with an awesome support team.</p>
                <div className="home_header_item__form">
                  <form action="" onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Enter your email" name="email" value={email} onChange={this.handleChange}/>
                    <input type="submit" value="Get Started"/>
                  </form>
                  <Link className="btn_white" to="/get-a-demo">Get a Demo</Link>
                </div>
              </div>
              <div className="home_header_wrap__item home_header_item">
                {/* <a href="#/">
                <ImageObserver src={require("../images/img_header_video.jpg")} altString="Video" />
                <span><ImageObserver src={require("../images/icon_play.svg")} altString="Play" /></span>
                </a> */}
                 <ImageObserver src={require("../images/header-dashboard-anim.gif")} altString="Video" />
              </div>
            </div>
            <div className="home_header__logo home_logo">
              <div className="home_logo__item">
                <ImageObserver src={require("../images/logo_labs.png")} altString="Logo" />                
              </div>
              <div className="home_logo__item">
                <ImageObserver src={require("../images/logo_webposition.png")} altString="Logo" />                
              </div>
              <div className="home_logo__item">
                <ImageObserver src={require("../images/logo_booking.png")} altString="Logo" />                
              </div>
              <div className="home_logo__item">
                <ImageObserver src={require("../images/logo_hotels.png")} altString="Logo" />                
              </div>
              <div className="home_logo__item">
                <ImageObserver src={require("../images/holiday_taxis.png")} altString="Logo" />                
              </div>
            </div>
          </div>
        </section>
        <section className="home_how">
          <div className="ui container">
            <div className="home_how__title">
              <h2 className="title t-h2">How can Limeproxies help you</h2>
            </div>
            <div className="home_how__wrapper home_how_wrap">
              <div className="home_how_wrap__item">
                <ImageObserver src={require("../images/icon_how_1.svg")} altString="Icon" />                
                <h3 className="title t-h3">
                  Sales Intelligence
                </h3>
                <p>Empower your sales on the next level by understanding who are the best customers for your business with dedicated and high-speed proxies</p>
              </div>
              <div className="home_how_wrap__item">
                <ImageObserver src={require("../images/icon_how_2.svg")} altString="Icon" />                
                <h3 className="title t-h3">
                  Rank Tracking
                </h3>
                <p>Limeproxies helps you keep an eye on all your Google rankings, and makes sure that your SEO strategies are going in the right direction.</p>
              </div>
              <div className="home_how_wrap__item">
                <ImageObserver src={require("../images/icon_how_3.svg")} altString="Icon" />                
                <h3 className="title t-h3">
                  Data Scrapping
                </h3>
                <p>Scrape anything you want whenever you want, you can scrape potential customers, or the clients of your customers with complete anonymity.</p>
              </div>
              <div className="home_how_wrap__item">
                <ImageObserver src={require("../images/icon_how_4.svg")} altString="Icon" />                
                <h3 className="title t-h3">
                  Ad Verification
                </h3>
                <p>With ad verification proxies, you can instantly verify your advertiser’s pages and be confident they do not have any malware possession.</p>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="home_features home_features_c">
          <div className="ui container">
            <div className="home_features__wrapper home_features_wrap">
              <div className="home_features_wrap__img">
                <img className="awesome-img" src={require("../images/awesome.png")} alt="shocked girl"/>
              </div>
              <div className="home_features_wrap__item">
                <h2 className="title t-h2">With LimeProxies get Awesome features for best price.</h2>
                <p>The dedicated proxies that we offer are hosted on a
                  server network owned by us. Unlike other proxy
                  sellers who only resell proxies, we own 100% of our
                  inventory, which gives us the opportunity to sell
                  them for much lower prices.
                </p>
                <a  className="t-h3" href="#/">
                Learn More
                <img src={require("../images/arrows_right.svg")} alt="Arrows"/>
                </a>
              </div>
            </div>
            <div className="home_features__title">
              <h2 className="t-h2">Our Awesome features</h2>
            </div>
            <div className="home_features__list">
              <Menu  className="ui menu home_features__menu menu-big">
                <Menu.Item name='High Performance'
                  active={activeItem === 'High Performance'}
                  onClick={this.handleItemClick}>
                </Menu.Item>

                <Menu.Item name= "40+ Geo Locations"
                  active={activeItem === "40+ Geo Locations"}
                  onClick={this.handleItemClick}>
                  40+ Geo Locations
                </Menu.Item>

                <Menu.Item name='Simultaneous Usage'
                  active={activeItem === 'Simultaneous Usage'}
                  onClick={this.handleItemClick}>
                </Menu.Item>

                <Menu.Item name='Anytime IP Refresh'
                  active={activeItem === 'Anytime IP Refresh'}
                  onClick={this.handleItemClick}>
                </Menu.Item>
              </Menu>
              <Menu  secondary className="ui menu home_features__menu menu-small">
                <Menu.Item name='High Performance'
                  active={activeItem === 'High Performance'}
                  onClick={this.handleItemClick}>
                </Menu.Item>

                <Menu.Item name= "40+ Geo Locations"
                  active={activeItem === "40+ Geo Locations"}
                  onClick={this.handleItemClick}>
                  40+ Geo Locations
                </Menu.Item>

                <Menu.Item name='Simultaneous Usage'
                  active={activeItem === 'Simultaneous Usage'}
                  onClick={this.handleItemClick}>
                </Menu.Item>

                <Menu.Item name='Anytime IP Refresh'
                  active={activeItem === 'Anytime IP Refresh'}
                  onClick={this.handleItemClick}>
                </Menu.Item>
              </Menu>

              <Swiper className="swiper-wrapper">
                <div className="swiper-holder">
                  <p className="swiper-title">High Performance</p>
                  {this.renderHigh()}
                </div>
                <div className="swipper-holder">
                  <p className="swiper-title">40+ Geo Locations</p>
                  {this.renderGeo()}
                </div>
              </Swiper>

              <div className="home_features__block">
                <div className="ui tab home_features__tab active" data-tab="tab-name">
                  {
                    activeItem === 'High Performance' ?
                      this.renderHigh() :
                      activeItem === "40+ Geo Locations" ?
                        this.renderGeo()
                        : null
                  }
                </div>
              </div>
            </div>
          </div>
        </section> */}
        
        <section className="home_reasons">
          <div className="ui container">
            <h2 className="title t-h2 t-center">6 reasons to choose Limeproxies</h2>
            <div className="home_reasons__wrapper home_reasons_wrap">
              <div className="home_reasons_wrap__list home_reasons_list">
                { homeReasonsData.map((reason) => (
                  <div key={reason.title} className="home_reasons_list__item home_reasons_item">
                    <div className="home_reasons_item__icon">
                      <ImageObserver src={reason.img} altString="Icon"/>                
                    </div>
                    <div className="home_reasons_item__text">
                      <h3 className="t-h3">{reason.title}</h3>
                      <p>{reason.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div className="home_reasons_wrap__img">
                <img src={require("../images/img_reasons.png")} alt="guy pointing to text"/>
              </div> */}
            </div>
          </div>
        </section>
        
        <SectionCoverage />

        <section className="home_features use-cases">
          <div className="ui container">
            <div className="home_features__title">
              <h2 className="title t-h2">Use Cases</h2>
            </div>
            <div className="home_features__list">
              <Menu className="ui menu home_features__menu home_usecase__menu menu-big">
                { homeUseCaseData.map((item, i) => (
                  <Menu.Item key={item.tabTitle}
                    active={this.state.activeUseCaseIndex === i}
                    onClick={() => this.handleUseCaseActive(i)}>
                    {item.tabTitle}
                  </Menu.Item>
                ))}
              </Menu>

              <Menu secondary className="ui menu home_features__menu menu-small">
                { homeUseCaseData.map((item, i) => (
                  <Menu.Item key={item.tabTitle}
                    active={this.state.activeUseCaseIndex === i}
                    onClick={() => this.handleUseCaseActive(i)}>
                    {item.tabTitle}
                  </Menu.Item>
                ))}
              </Menu>

              <Swiper className="swiper-wrapper">
                { homeUseCaseData.map((item, i) => (
                  <div key={item.tabTitle}
                    className="swipper-holder">
                    <p className="swiper-title">{item.tabTitle}</p>

                    <div className="home_cases_item">
                      <div className="home_cases_item__top home_cases_top">
                        <div className="home_cases_top__item">
                          <h3 className="title">{item.bannerTitle}</h3>
                          <ImageObserver src={item.bannerImg} altString="" />                
                        </div>
                      </div>
                      <div className="home_cases_item__title">
                        <h3 className="title">{item.descTitle}</h3>
                      </div>
                      <div className="home_cases_item__text">
                        <p>{item.text}</p>
                      </div>
                      <Link to={item.readMore} className="home_cases_item__text t-h4 t-blue">Learn More</Link>
                    </div>
                  </div>
                ))}
              </Swiper>

              <div className="home_features__block">
                <div className="ui tab home_features__tab active">

                  <div className="home_cases_item">
                    <div className="home_cases_item__top home_cases_top">
                      <div className="home_cases_top__item">
                        <h3 className="title">{homeUseCaseData[this.state.activeUseCaseIndex].bannerTitle}</h3>
                        <ImageObserver src={homeUseCaseData[this.state.activeUseCaseIndex].bannerImg} altString="" />
                      </div>
                    </div>
                    <div className="home_cases_item__title">
                      <h3 className="title">{homeUseCaseData[this.state.activeUseCaseIndex].descTitle}</h3>
                    </div>
                    <div className="home_cases_item__text">
                      <p>{homeUseCaseData[this.state.activeUseCaseIndex].text}</p>
                    </div>
                    <Link to={homeUseCaseData[this.state.activeUseCaseIndex].readMore} className="home_cases_item__text t-h4 t-blue">Read More</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <SectionLove/>
        <SectionStarted/>
        <Footer />
      </main>
    );
  }
}

export const query = graphql`
  query site {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`