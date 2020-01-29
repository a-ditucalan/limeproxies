import React from 'react'
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import { Tab } from 'semantic-ui-react'

import Header from '../layout/header'
import SectionStarted from '../layout/section-started'
// import Card from '../layout/card-resources'
import Footer from '../layout/footer'

// import postOne from '../images/start.png'
// import postTwo from '../images/wallet.png'
// import postThree from '../images/conversation.png'
// import postFour from '../images/workhard.png'
// import postFive from '../images/phone.png'
// import postSix from '../images/people.png'
// import bg from '../images/resources-bg.png'
// import SearchIcon from '../images/search-icon.png'


// const card = [
//   {
//     thumbnail: postOne,
//     title: "Getting started",
//     title2: "for a new	account, Limeproxies",
//     content: "10 articles in this collection",
//     author: "written by:",
//     name: "Steve Mark and Sandesh",
//     cta:{
//       type: "resources"
//     }
//   },
//   {
//     thumbnail: postTwo,
//     title: "How to access",
//     title2: "Account and billing",
//     content: "18 articles in this collection",
//     author: "written by:",
//     name: "Steve Mark, Sandesh and Jayesh",
//     cta:{
//       type: "resources"
//     }
//   },
//   {
//     thumbnail: postThree,
//     title: "How to use",
//     title2: "Limeproxies guides",
//     content: "22 articles in this collection",
//     author: "written by:",
//     name: "Steve Mark, Sandesh and Jayesh",
//     cta:{
//       type: "resources"
//     }
//   },
//   {
//     thumbnail: postFour,
//     title: "Fix it all , with",
//     title2: "Technical guidelines",
//     content: "23 articles in this collection",
//     author: "written by:",
//     name: "Steve Mark and Sandesh",
//     cta:{
//       type: "resources"
//     }
//   },
//   {
//     thumbnail: postFive,
//     title: "Video tutorials",
//     title2: "you must not miss.",
//     content: "78 articles in this collection",
//     author: "written by:",
//     name: "Steve Mark and Sandesh",
//     cta:{
//       type: "resources"
//     }
//   },
//   {
//     thumbnail: postSix,
//     title: "All the general",
//     title2: "topics you must know.",
//     content: "78 articles in this collection",
//     author: "written by:",
//     name: "Steve Mark and Sandesh",
//     cta:{
//       type: "resources"
//     }
//   }
// ]

const panes = [
  { menuItem: 'All' },
  { menuItem: 'Article' },
  { menuItem: 'Resources' },
  { menuItem: 'Videos' }
]

export default class Resources extends React.Component {
  state = {activeIndex: 0}

  handleTabChange = (e, { activeIndex }) => (
    this.setState({ activeIndex })
  )

   componentDidMount() {
     window.analytics.page('Resources | Limeproxies');
   }

  render() {
    // const {activeIndex} = this.state

    const { markdownRemark } = this.props.data // data.markdownRemark holds our post data
    const post = markdownRemark.frontmatter; 

    return (
      <main className="resources">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={`${post.meta_title}`} />
          <meta name="description" content={`${post.description}`} />
          <meta name="keywords" content={`${post.yoast_keyword}`} />
          <title> Resources | Limeproxies</title>
        </Helmet>

        <Header/>

        {/* <section className="resources-header resources-header_wrapper" style={{backgroundImage:  'url('+ bg +')'}}> */}
        <section className="resources-header resources-header_wrapper">
          <div className=" ui container pos-relative">
            <div className="resources-header__content-wrapper">
              {/* <div className="resources-header__input-wrapper">
                <p className="input-banner-text">Advice and answers from the LimeProxies Team</p>
                <div className="input-banner-holder">
                  <input className="search" placeholder="Search for answers.." type="text"/>
                  <img className="search-icon" src={SearchIcon} alt="Img"/>
                </div>
              </div> */}
              <h1 className="resources__title t-h1">Open For Learning</h1>
              <p className="resources__subtitle t-p-lg">
                We’ve cherry-picked the very best of limeproxies trick and resources and bundled them right
                here for you. Explore our strategies and insights, all laid out in one big ol’ learning
                buffet. Go ahead. Stuff your noggin.
              </p>
              <Tab menu={{ attached: false, tabular: true }} panes={panes} onTabChange={this.handleTabChange} className="resources-navbar" />
            </div>
          </div>
        </section>

        <section className="resources-content">
          {/* <div className={activeIndex === 0 ? "ui container resources-content__wrapper" : "d-none"}> */}
          <div className={"ui container resources-content__wrapper"}>
            {/* <div className="resources-content__header">
              <p className="resources-content__header--title">Open For Learning</p>
              <p className="resources-content__header--info">
                We’ve cherry-picked the very best of limeproxies trick and resources and bundled them right
                here for you. Explore our strategies and insights, all laid out in one big ol’ learning
                buffet. Go ahead. Stuff your noggin.
              </p>
            </div> */}
            {/* <div className="article article-holder">
              {card.map((card, i) => (
                <Card thumbnail={card.thumbnail}
                  title={card.title}
                  title2={card.title2}
                  content={card.content}
                  author={card.author}
                  name={card.name}
                  cta={card.cta}
                  key={i}	/>
              ))}
            </div> */}
          </div>
        </section>

        <SectionStarted/>
        <Footer/>
      </main>
    )
  }
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        meta_title
        yoast_keyword
        description
      }
    }
  }
`