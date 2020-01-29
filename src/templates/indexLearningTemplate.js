import React from 'react'
import { Link, graphql } from 'gatsby'

import { Helmet } from 'react-helmet'
import classNames from 'classnames'
 
import Header from '../layout/header'
import Card from '../layout/card-learning'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

export default class Resources extends React.Component {

  componentDidMount() {
    const data = this.props.data;
    const { markdownRemark } = data;
    const post = markdownRemark.frontmatter;
    window.analytics.page(post.title," | Limeproxies");
  }

  render() {
    const data = this.props.data
    const { markdownRemark } = data
    const post = markdownRemark.frontmatter 
    const siteUrl = data.site.siteMetadata.siteUrl
    // console.log(post)
    // console.log(this.props.data)

    let cardData = data.all.edges
    if (post.path === '/best-practices') { cardData = data.articles.edges }
    if (post.path === '/tutorials') { cardData = data.resources.edges }
    if (post.path === '/videos') { cardData = data.videos.edges }
    // console.log(cardData)

    return (
      <main className="resources">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={`${post.meta_title}`} />
          <meta name="description" content={`${post.description}`} />
          <meta name="keywords" content={`${post.yoast_keyword}`} />
          <link rel="canonical" href={`${siteUrl}resources`} />
          { 
            post.meta_title ? <title>{post.meta_title}</title> : <title>{post.title} | Limeproxiess</title>
          }
        </Helmet>

        <Header/>

        <section className="resources-header">
          <div className="ui container">
            <div>
              <h1 className="resources-header__title t-h1">{post.title}</h1>
              <p className="resources-header__subtitle t-p-lg">
                {post.subtitle}
              </p>
            </div>
          </div>
        </section>

        <section className="resources-tabs">
          <div className="ui container">
            <div className="resources-tabs__wrapper">
              <Link to="/resources" className={classNames("resources-tabs__item t-p", { active : post.path === '/'})}>All</Link>
              <Link to="/resources/best-practices" className={classNames("resources-tabs__item t-p", { active : post.path === '/best-practices'})}>Best Practices</Link>
              <Link to="/resources/tutorials" className={classNames("resources-tabs__item t-p", { active : post.path === '/tutorials'})}>Tutorials</Link>
              <Link to="/resources/videos" className={classNames("resources-tabs__item t-p", { active : post.path === '/videos'})}>Videos</Link>
            </div>
          </div>
        </section>

        <section className="resources-content">
          <div className="ui container">
            <div className="resources-content__wrapper">
              {cardData.map(({node}, i) => {
                const card = node.frontmatter;

                return (
                  <Card key={card.title} details={card} />
                )
              })}
              
            </div>
          </div>
        </section>

        <SectionStarted/>
        <Footer/>
      </main>
    )
  }
}

export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html,
      frontmatter {
        meta_title
        description
        yoast_keyword
        path
        title
        subtitle
      },
    },
    all: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { 
        frontmatter: { hiddentype: {in: ["video", "resource", "article"]} }
      },
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            thumbnail
            hiddentype
          }
        }
      }
    },
    articles: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { 
        frontmatter: { hiddentype: {in: ["article"]} }
      },
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            thumbnail
            hiddentype
          }
          timeToRead
        }
      }
    },
    resources: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { 
        frontmatter: { hiddentype: {in: ["resource"]} }
      },
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            excerpt
            thumbnail
            hiddentype
          }
        }
      }
    },
    videos: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { 
        frontmatter: { hiddentype: {in: ["video"]} }
      },
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            thumbnail
            hiddentype
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