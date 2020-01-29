import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import { Helmet } from 'react-helmet'
import classNames from 'classnames'
import Observer from '@researchgate/react-intersection-observer'

import Header from '../layout/header'
import Footer from '../layout/footer'

export default class Reading extends Component {
  state = {
    isVisible: false
  }

  handleChange = event => {
    this.setState({
      isVisible: event.isIntersecting ? true : false
    })
  }

  componentDidMount() {
    const { markdownRemark } = this.props.data;
    const reading = markdownRemark.frontmatter.title;
    window.analytics.page(reading);
  }

  render() {
    const { 
      markdownRemark,
      readingpages,
      site
    } = this.props.data // data.markdownRemark holds our post data
    const { html } = markdownRemark

    const siteUrl = site.siteMetadata.siteUrl
    const path = markdownRemark.frontmatter.path
    const finalPath = path.replace(/^\/|\/$/g, '')

    const readingCount = readingpages.edges.length
    return (
      <main className="reading-page">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={`${markdownRemark.frontmatter.meta_title}`} />
          <meta name="description" content={`${markdownRemark.frontmatter.description}`} />
          <meta name="keywords" content={`${markdownRemark.frontmatter.yoast_keyword}`} />
           <link rel="canonical" href={`${siteUrl}${finalPath}`} />
          <title>{markdownRemark.frontmatter.meta_title}</title>
        </Helmet>

        <Header />

        <div className={classNames("reading-header", { active: !this.state.isVisible })}>
          {readingpages.edges.map(({node}, i) => {
            return (
              <div className="d-flex" key={i}>
                <Link to={node.frontmatter.path} 
                  getProps={({ isPartiallyCurrent }) => {
                    return isPartiallyCurrent ? { className: "active" } : null
                  }}>
                  {node.frontmatter.tabTitle}
                </Link>
                <div className={classNames({ 'd-none': i === readingCount - 1})}>&nbsp; / &nbsp;</div>
              </div>
            )
          })}
        </div>

        <section className="simple">
          <div className="ui container">
            <Observer onChange={this.handleChange}>
              <h1 className="simple__title t-h2-lg">{markdownRemark.frontmatter.title}</h1>
            </Observer>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
        <Footer />
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
        description
        yoast_keyword
        title
        path
      }
    },
    readingpages: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/readingpages/"} },
    ) {
      edges {
        node {
          frontmatter {
            path,
            tabTitle
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