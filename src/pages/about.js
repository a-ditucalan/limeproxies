import React, { Component } from 'react'

import { Helmet } from 'react-helmet'
import { Tab } from 'semantic-ui-react'

import Header from '../layout/header'
import AboutMain from '../layout/about-main'
import AboutTeam from '../layout/about-team'
// import AboutNews from '../layout/about-news'
import AboutLogos from '../layout/about-logos'
// import AboutContact from '../layout/contact-sales'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

const panes = [
  { menuItem: 'About us' },
  // { menuItem: 'Our Team' },
  // { menuItem: 'News' },
  { menuItem: 'Logos' },
  // { menuItem: 'Contact' }
]

export default class About extends Component {
  constructor(props) {
    super(props)

    this.state = { activeIndex: 0,
      fields: {
        fname: "",
        lname: "",
        email: "",
        company: "",
        message: "",
        help: "1"
      },
      errors: {},
      sent: false,
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    window.analytics.page('About | Welcome To LimeProxies | LimeProxies', {
      name: 'About',
      title: 'About | Welcome To LimeProxies | LimeProxies',
    });

   // const elementsMenu = document.getElementsByClassName("about-style")
   // const elements = document.getElementsByClassName("btn-about")
   // const elementsTwo = document.getElementsByClassName("btn-con-style")
   // const elementsThree = document.getElementsByClassName("btn-con-get-style")
   // const mq = window.matchMedia( "(min-width: 768px)" )
   // const mq2 = window.matchMedia( "(max-width: 767px)" )
   // document.querySelector(".header").classList.add("header-transparent")

   // for (let i = 0; i < elementsMenu.length; i++) {
   //   elementsMenu[i].style.color="white"
   // }

   // for (let i = 0; i < elements.length; i++) {
   //   elements[i].classList.add("btn-about-style")
   // }

   // for (let i = 0; i < elementsTwo.length; i++) {
   //   if (mq.matches) {
   //     elementsTwo[i].classList.add("btn-about-style")
   //   }
   // }

   // for (let i = 0; i < elementsThree.length; i++) {
   //   if (mq.matches) {
   //     elementsThree[i].classList.add("btn-get-style")
   //   }
   // }

   // if (mq2.matches) {
   //   document.getElementsByClassName("logo-white")[0].style.display = "none"
   //   document.getElementsByClassName("logo-orig")[0].style.display = "block"
   // } else {
   //   document.getElementsByClassName("logo-white")[0].style.display = "block"
   //   document.getElementsByClassName("logo-orig")[0].style.display = "none"
   // }
  }

  componentWillUnmount() {
   // const mq = window.matchMedia( "(min-width: 768px)" )
   // const elementsTwo = document.getElementsByClassName("btn-con-style")
   // const elementsThree = document.getElementsByClassName("btn-con-get-style")
   // const elementsMenu = document.getElementsByClassName("about-style")
   // document.querySelector(".header").classList.remove("header-transparent")

   // for (let i = 0; i < elementsMenu.length; i++) {
   //   elementsMenu[i].style.color="black"
   // }

   // for (let i = 0; i < elementsTwo.length; i++) {
   //   if (mq.matches) {
   //     elementsTwo[i].classList.remove("btn-about-style")
   //   }
   // }

   // for (let i = 0; i < elementsThree.length; i++) {
   //   if (mq.matches) {
   //     elementsThree[i].classList.remove("btn-con-get-style")
   //   }
   // }
  }

  handleTabChange = (e, { activeIndex }) => (
    this.setState({ activeIndex })
  )

  handleChange(e) {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value
    this.setState({ fields })
  }

  render() {
    const { activeIndex } = this.state

    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <main className="about">
        <Helmet>
			    <meta charSet="utf-8" />
          <meta name="title" content="About  Us | Quality Proxy Provider | LimeProxies" />
          <meta name="description" content="About the team behind Limeproxies, our team's priority is our customers’ success. We provide premium support through our innovative Campfire Support system." />
          <meta name="keywords" content="yourprivateproxy, fast working proxy, safe proxy websites" />
          <link rel="canonical" href={`${siteUrl}about`} />
          <title>About | Welcome To LimeProxies | LimeProxies</title>
        </Helmet>

        <Header/>
        <section className="about_header">
          <div className="ui container">
            <div className="about_header__wrapper">
              <h1 className="title t-h1">Welcome to Limeproxies</h1>
              <p className="t-p-lg">Proxy service simplified!</p>
            </div>
            <Tab menu={{ attached: false, tabular: true }} panes={panes} onTabChange={this.handleTabChange} className="about_header__menu" />
          </div>
        </section>

        <section className="about_info">
          <div className="about_info__wrapper about_info_wrap">
            {/* <div className={activeIndex === 0 ? "ui tab active about_info_wrap" : "ui tab about_info_wrap"} data-tab="tab-about">
              <AboutMain />
            </div>
            <div className={activeIndex === 1 ? "ui tab active" : "ui tab"} data-tab="tab-careers">
              <AboutTeam />
            </div>
            <div className={activeIndex === 2 ? "ui tab active" : "ui tab"} data-tab="tab-news">
              <AboutNews />
            </div>
            <div className={activeIndex === 3 ? "ui tab active" : "ui tab"} data-tab="tab-logos">
              <AboutLogos />
            </div>
            <div className={activeIndex === 4 ? "ui tab active" : "ui tab"} data-tab="tab-contact">
              <AboutContact />
            </div> */}

            <div className={activeIndex === 0 ? "ui tab active about_info_wrap" : "ui tab about_info_wrap"} data-tab="tab-about">
              <AboutMain />
            </div>
            {/* <div className={activeIndex === 1 ? "ui tab active" : "ui tab"} data-tab="tab-careers">
              <AboutTeam />
            </div> */}
            <div className={activeIndex === 1 ? "ui tab active" : "ui tab"} data-tab="tab-news">
              <AboutLogos />
            </div>
          </div>
        </section>

        <SectionStarted />

        <Footer />
      </main>
    )
  }
}

export const query = graphql`
  query about {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`