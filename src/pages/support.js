import React from 'react'
import { Helmet } from 'react-helmet'
import { Link, graphql } from 'gatsby'
import ImageObserver from '../layout/observer-image-target'

import Header from '../layout/header'
import Footer from '../layout/footer'

import Card from '../layout/card-learning'
import phoneIcon from '../images/phone-icon.svg'
import emailIcon from '../images/email-icon (1).svg'
import chatIcon from '../images/chat-icon.svg'
import slackIcon from '../images/slack-icon.svg'
import smsIcon from '../images/sms-icon.svg'
import fingerIcon from '../images/finger-wag-icon.svg'

import cmsSupport from '../dynamic/support.json'
 
export default class support extends React.Component {

  componentDidMount() {
    window.analytics.page('Proxy Support |  24/7 SUPPORT| Limeproxies');
  }
  

render() { 

    const data = this.props.data
    const siteUrl = data.site.siteMetadata.siteUrl
 
    // console.log(post)
    // console.log(this.props.data)

    let articlesList = data.articles.edges
    let videoList = data.videos.edges

  return (
    <main className="support">
      <Helmet>
				<meta charSet="utf-8" />
        <meta name="title" content={cmsSupport.meta_title}/>
        <meta name="description" content={cmsSupport.description} />
        <meta name="keywords" content={cmsSupport.yoast_keyword} />

        <link rel="canonical" href={`${siteUrl}support`} />
				<title>{cmsSupport.meta_title}</title>
			</Helmet>

      <Header />

      <div className="banner">
        <div className="ui container banner__custom-container">
          <h1 className="banner__name">24/7 SUPPORT</h1>
          <p className="banner__title">{cmsSupport.banner_title}</p>
          <p className="banner__subtitle">{cmsSupport.banner_description}</p>
        </div>
      </div>

      <div className="help">
        <div className="ui container">
          <h2 className="help__title">{cmsSupport.section2title}</h2>
          <div className="help__call-to-actions">

            {cmsSupport.calltoactions.map((item) => (
              <a key={item.contentsHere.helpLabel} className="help__icon-wrapper" href={item.contentsHere.helpLink} target={item.contentsHere.targetNewTab === true ? '_blank' : ''}>
                <img src={item.contentsHere.helpIcon} alt="phone"/>
                <p className="help__description">{item.contentsHere.helpLabel}</p>
                <p className="help__link">{item.contentsHere.helpDetails}</p>
              </a>
            ))}

              {/* <a className="help__icon-wrapper" href="mailto:info@purple-rain.io">
                <img src={emailIcon} alt="email"/>
                <p className="help__description">EMAIL</p>
                <p className="help__link">info@<br />limeproxies.io</p>
              </a>

              <a className="help__icon-wrapper">
                <img src={chatIcon} alt="chat"/>
                <p className="help__description">CHAT</p>
                <p className="help__link">In Limeproxies</p>
              </a>

              <a className="help__icon-wrapper" href="http://slack.limeproxies.com" target="_blank">
                <img src={slackIcon} alt="slack"/>
                <p className="help__description">SLACK</p>
                <p className="help__link">slack.<br />limeproxies.com</p>
              </a>

              <a className="help__icon-wrapper" href="sms:+19363427014">
                <img src={smsIcon} alt="sms"/>
                <p className="help__description">SMS</p>
                <p className="help__link">(936) 342-7014</p>
              </a> */}
          </div>
          <p className="help__module">{cmsSupport.helpDescription}</p>
        </div>
      </div>

      <div className="content">
        <div className="ui container">
          <div className="content__wrapper">
            <div className="content__body">

            {cmsSupport.supportContent.map((item) => (
              <div key={item.contentsHere.supportTitle}>
                <h3 className="content__title">{item.contentsHere.supportTitle}<span>{item.contentsHere.supportFor}</span></h3>
                <p>{item.contentsHere.helpDetails}</p>
              </div>
            ))}
             
            </div>

            {/*sidebar*/}

            <div className="content__sidebar">
              <div className="content__widgetOne">
                <img src={fingerIcon} className="content__widgetOne__finger" />
                <p>Are you a current Justworks customer with a question?</p>
                <a href="http://help.limeproxies.com" className="content__widgetOne__link" target="_blank">Help center</a>
              </div>

              <div className="content__widgetThree">

                  <a href="#">
                    <ImageObserver src={require("../images/img_header_video.jpg")} altString="Video" />
                   <span className="content__widgetThree__playBtn"><ImageObserver src={require("../images/icon_play.svg")} altString="Play" /></span>
                  </a>

                  {videoList.map(({node}, i) => {
                    const card = node.frontmatter;
                    const slug = card.path;
                    let finalPath = `/resources/videos${slug}`
                    return (
                      <div  key={i} >
                        <p className="content__widgetThree__excerpt">{card.excerpt}</p>
                        <p className="content__widgetThree__author">{card.author} </p>
                        <p className="content__widgetThree__date">{card.date}</p>

                        <Link to={finalPath}className="content__widgetThree__link">
                          Watch the Video
                        </Link>
                      </div>
                    )
                  })} 
              </div>

              <div className="content__widgetTwo">
                <h3 className="content__widgetTwo__title">Best Practices</h3>
                <ul>
                  {articlesList.map(({node}, i) => {
                    const card = node.frontmatter;
                    const slug = card.path;
                    let finalPath = `/resources/best-practices${slug}`
                    return (
                      <Link to={finalPath} key={i}>
                        <li className="content__widgetTwo__list">{card.title}</li>
                      </Link>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="browsing">
        <div className="ui container">
          <h3 className="browsing__title">{cmsSupport.section3title}</h3>
          <p className="browsing__subTitle">{cmsSupport.section3description}</p>
          <a href="/pricing" className="browsing__btn">View Pricing</a>
        </div>
      </div>

      <div className="demo">
        <div className="ui container">
          <div className="demo__wrapper">
            <div className="demo__textHolder">
              <h2 className="demo__title">{cmsSupport.requestTitle}</h2>
              <ul className="demo__list">

               {cmsSupport.requestademo.map(item => {
                
                return (
                <li key={item.contentsHere.requestList} className="demo__listItem"><span className="demo__listItem__roundNumber">{item.contentsHere.requestNumber}</span><span className="demo__listItem__text">{item.contentsHere.requestList}</span></li>
                )}
               )}

              </ul>
            </div>
            <div className="demo__formHolder">
              <form action="">
                <input type="text" name="name" placeholder="Name *" className="demo__fields" required/>
                <input type="text" name="company" placeholder="Company *" className="demo__fields" required/> 
                <input type="text" name="employees" placeholder="Number of Employees *" className="demo__fields" required/>
                <input type="email" name="email" placeholder="Work Email *" className="demo__fields" required/> 
                <input type="tel" name="number" placeholder="Phone Number *" className="demo__fields" required/> 
                <input type="submit" value="Request a Demo" className="demo__buttonSubmit" />
                <a className="demo__privacyLink" href="/privacy" target="_blank" >Limeproxies Privacy and Policy</a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
    ) 
  }
}

export const pageQuery = graphql`
  query asd {
    articles: allMarkdownRemark(
      filter: { 
        fileAbsolutePath: {regex : "\/articles/"} 
        frontmatter: { hiddentype: {in: ["article"]} }
      },
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    },
    videos: allMarkdownRemark(
      limit: 1
      filter: { 
        fileAbsolutePath: {regex : "\/videos/"},
        frontmatter: { hiddentype: {in: ["video"]} }
      },
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            author
            date
            excerpt
          }
        }
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

