import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import { Helmet } from 'react-helmet'
import classNames from 'classnames'
import Observer from '@researchgate/react-intersection-observer'

import Header from '../layout/header'
import Footer from '../layout/footer'

export default class Plain extends Component {

  componentDidMount() {
    const { markdownRemark } = this.props.data;
    const plain = markdownRemark.frontmatter.title;
    window.analytics.page(plain);
  }

  render() {
    const { 
      markdownRemark,
      site
    } = this.props.data // data.markdownRemark holds our post data
    const { html } = markdownRemark

    const siteUrl = site.siteMetadata.siteUrl
    const path = markdownRemark.frontmatter.path
    const finalPath = path.replace(/^\/|\/$/g, '')

    return (
      <main class="reading-page">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={`${markdownRemark.frontmatter.meta_title}`} />
          <meta name="description" content={`${markdownRemark.frontmatter.description}`} />
          <meta name="keywords" content={`${markdownRemark.frontmatter.yoast_keyword}`} />
           <link rel="canonical" href={`${siteUrl}${finalPath}`} />
          <title>{markdownRemark.frontmatter.meta_title}</title>
        </Helmet>

        <Header />

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
    plainPage: allMarkdownRemark(
      filter: { fileAbsolutePath: {regex : "\/plainpage/"} },
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