import React, { Component } from "react"
import { graphql } from "gatsby"

import { Helmet } from "react-helmet"

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import SectionStarted from '../layout/section-started'
import SectionLove from '../layout/section-love'
import Footer from '../layout/footer'

import cmsTopLocation from '../dynamic/topLocation.json'

const featuresData = [
  {
    img: require("../images/icon_pr_2_feat_1.svg"),
    title: 'Dedicated IPs',
    text: `No one else shares your IPs with you.`
  },
  {
    img: require("../images/icon_pr_2_feat_2.svg"),
    title: 'Simultaneous Usage',
    text: `Add as many as 25 IPs to be authenticated for proxy usage.`
  },
  {
    img: require("../images/icon_pr_2_feat_3.svg"),
    title: 'Highly Anonymous',
    text: `All headers disabled, super elite proxies.`
  },
  {
    img: require("../images/icon_pr_2_feat_4.svg"),
    title: '24/7 Support',
    text: `Round the clock technical support , worldwide.`
  },
  {
    img: require("../images/icon_pr_2_feat_5.svg"),
    title: '300+ Subnets',
    text: `Proxies from multi mixed subnets from nationwide locations.`
  },
  {
    img: require("../images/icon_pr_2_feat_6.svg"),
    title: 'Multiple Locations',
    text: `8+ US Locations and 30+ Countries worldwide.`
  },
  {
    img: require("../images/icon_pr_2_feat_7.svg"),
    title: 'High Performance',
    text: `Great for high perfomance, multi threaded softwares.`
  },
  {
    img: require("../images/icon_pr_2_feat_8.svg"),
    title: 'Anytime IP Refresh',
    text: `Change your proxy IP on demand, as required, anytime.`
  }
]

const topLocation = [
  {
    img: require("../images/usa.png"),
    country: 'United States',
    label: 'IPs'
  },
  {
    img: require("../images/britain.png"),
    country: 'Great Britain',
    label: 'IPs'
  },
  {
    img: require("../images/brazil.png"),
    country: 'Brazil',
    label: 'IPs'
  },
  {
    img: require("../images/russia.png"),
    country: 'Russia',
    label: 'IPs'
  },
  {
    img: require("../images/france.png"),
    country: 'France',
    label: 'IPs'
  },
  {
    img: require("../images/germany.png"),
    country: 'Germany',
    label: 'IPs'
  },
  {
    img: require("../images/mexico.png"),
    country: 'Mexico',
    label: 'IPs'
  },
  {
    img: require("../images/canada.png"),
    country: 'Canada',
    label: 'IPs'
  },
  {
    img: require("../images/australia.png"),
    country: 'Australia',
    label: 'IPs'
  },
  {
    img: require("../images/china.png"),
    country: 'China',
    label: 'IPs'
  }
]

export default class LocationsTemplate extends Component {
  state = {
    email: ''
  }

  componentDidMount() {
    const { markdownRemark } = this.props.data
    const post = markdownRemark.frontmatter
    const finalTitle = post.title
    window.analytics.page(finalTitle + 'Proxies | Reliable Premium IPs | LimeProxies', {
      name: finalTitle + 'Proxies',
      title: finalTitle + 'Proxies | Reliable Premium IPs | LimeProxies',
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

 
  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const from = "per Country page email form - banner";

    window.analytics.user().traits({});
    // Add your own unique ID here or we will automatically assign an anonymousID
    window.analytics.identify('Email subscription',{
      color: 'Site color - Blue',
      email,
      type : 'Button',
      text: 'Try it for free',
      location : 'Banner' 
    });
  }
  

  render() {
    const { markdownRemark, site } = this.props.data // data.markdownRemark holds our post data
    const post = markdownRemark.frontmatter
    const finalTitle = post.title.replace(post.highlight, '');
    const { email } = this.state;
    const siteUrl = site.siteMetadata.siteUrl

    const path = post.path
    const finalPath = path.replace(/^\/|\/$/g, '')

    return (
      <main className="base-proxies">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={`${post.meta_title}`} />
          <meta name="description" content={`${post.description}`} />
          <meta name="keywords" content={`${post.yoast_keyword}`} />
          <link rel="canonical" href={`${siteUrl}${finalPath}`} />
          <title> {post.meta_title} </title>
        </Helmet>
  
        <Header />
        <section className="product2_header"> 
          <div className="ui container d-flex p-relative">
            <div className="product2_header__img">
              <ImageObserver src={require("../images/img_header_product2.jpg")} />
            </div>
            <div className="product2_header__wrapper product2_header_wrap">
              <div className="product2_header_wrap__title">
                <h1 className="title t-h1">{finalTitle} <span>{post.highlight}</span></h1>
              </div>
              <div className="product2_header_wrap__text">
                <p className="t-p-lg">{post.desccription}</p>
              </div>
              <div className="product2_header_wrap__form home_header_item__form">
                <form action="" onSubmit={this.handleSubmit}>
                  <input type="email" placeholder="Enter your email" name="email" value={email} onChange={this.handleChange}/>
                  <input type="submit" value="Try for free"/>
                </form>
              </div>
              <div className="product2_header_wrap__logo product2_header_logo">
                <div className="product2_header_logo__item">
                  <ImageObserver src={require("../images/logo_labs.jpg")} />
                </div>
                <div className="product2_header_logo__item">
                  <ImageObserver src={require("../images/logo_webposition.jpg")} />
                </div>
                <div className="product2_header_logo__item">
                  <ImageObserver src={require("../images/logo_booking.jpg")} />
                </div>
                <div className="product2_header_logo__item">
                  <ImageObserver src={require("../images/logo_hotels.jpg")} />
                </div>
              </div>
            </div>
            <div className="product2_header__text">
              <p className="t-p-lg">{post.banner_text_content}</p>
            </div>
          </div>
        </section>

        <section className="product2_topLocation">
          <div className="ui container">
            <div className="product2_topLocation__title">
              <h2 className="title t-h2">Top Locations</h2>
            </div>
            <div className="product2_topLocation__wrapper">
            
              {cmsTopLocation.toplocationContent.map((item) => (
                <div key={item.contentsHere.countryName} className="product2_topLocation_item">
                  <a href={`${item.contentsHere.linkPath}`}>
                    <ImageObserver src={item.contentsHere.countryFlagImage} />
                    <h3 className="title t-p-md">{item.contentsHere.countryName}</h3>
                  </a>
                  <p className="subTitle">{item.contentsHere.countryIps}</p>
                </div>
              ))}

            </div>
          </div>
        </section>
        
        <section className="product2_sure">
          <div className="ui container">
            <div className="product2_sure__title">
              <h2 className="title t-h2">{post.be_sure_title}</h2>
            </div>

            <div className="product2_sure__wrapper product2_sure_wrap">
              <div className="product2_sure_wrap__list product2_sure_list">

                {post.besure.map((item) => (
                  <div className="product2_sure_list__item product2_sure_item">
                    <div className="product2_sure_item__top">
                      <h3 className="title t-h3">{item.be_sure_section_content.be_sure_list_title}</h3>
                      <ImageObserver src={item.be_sure_section_content.be_sure_list_thumbnail} altString={item.be_sure_section_content.be_sure_alt_text}/>
                    </div>
                    <div className="product2_sure_item__text">
                      <p>{item.be_sure_section_content.be_sure_list_description}</p>
                    </div>
                  </div>
                ))}

              </div>
              <div className="product2_sure_wrap__img">
                <ImageObserver src={require("../images/img_sure.jpg")} />
              </div>
            </div>
          </div>
        </section>

        <section className="product2_features">
          <div className="ui container">
            <div className="product2_features__title">
              <h2 className="title t-h2">With Limeproxies get these awesome features and stay ahed all</h2>
            </div>
            <div className="product2_features__wrapper product2_features_wrap">

              {post.awesome_features_list.map((item) => (
                <div key={item} className="product2_features_item">
                  <div className="product2_features_item__top">
                    <ImageObserver src={item.awesome_features_list_content.awesome_features_list_thumbnail} />
                    <h3 className="title t-h3">{item.awesome_features_list_content.awesome_features_list_title}</h3>
                  </div>
                  <div className="product2_features_item__text">
                    <p>{item.awesome_features_list_content.awesome_features_list_description}</p>
                  </div>
                </div>
              ))}

            </div>
            <div className="product2_features__text">
              <ImageObserver src={require("../images/icon_pr2_enjoy.svg")} />
              <p className="t-p-lg">{post.some_fullwidth_text}</p>
            </div>
            <div className="product2_features__form home_header_item__form">
              <h3 className="title t-h2">Get started for free today</h3>
              <form action="" onSubmit={this.handleSubmit}>
                <input type="email" placeholder="Enter your email" name="email" value={email} onChange={this.handleChange}/>
                <input type="submit" value="Try for free"/>
              </form>
              <p>No credit card required</p>
            </div>
          </div>
        </section>
        <section className="product2_like">
          <div className="ui container">
            <div className="product2_like__title">
              <h2 className="title t-h2">{post.use_limeproxies_title}</h2>
            </div>
            <div className="product2_like__text">
              <p>{post.use_limeproxies_description}</p>
            </div>
            <div className="product2_like__wrapper product2_like_wrap">

              {post.use_limeproxies.map((item) => (
                <div className="product2_like_wrap__item product2_like_item">
                  <ImageObserver src={item.use_limeproxies_list.use_limeproxies_list_thumbnail} />
                  <h3 className="title t-h3">{item.use_limeproxies_list.use_limeproxies_list_title}</h3>
                  <p>{item.use_limeproxies_list.use_limeproxies_list_description}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        <SectionLove />
        <SectionStarted />
        <Footer />
      </main>
    )
  }
}

export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        meta_title
        yoast_keyword
        description
        title
        highlight
        path
        desccription
        banner_text_content
        be_sure_title
        besure {
          be_sure_section_content {
            be_sure_list_title
            be_sure_list_thumbnail
            be_sure_alt_text
            be_sure_list_description
          }
        }
        awesome_features
        awesome_features_list {
          awesome_features_list_content {
            awesome_features_list_thumbnail
            awesome_features_list_title
            awesome_features_list_description
          }
        }
        some_fullwidth_text
        use_limeproxies_title
        use_limeproxies_description
        use_limeproxies {
          use_limeproxies_list {
            use_limeproxies_list_thumbnail
            use_limeproxies_list_title
            use_limeproxies_list_description
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