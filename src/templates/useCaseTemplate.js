import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import { Helmet } from 'react-helmet'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import SectionQuestions from '../layout/section-questions'
import SectionFeatures from '../layout/section-features'
import SectionLove from '../layout/section-love'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

export default class useCaseTemplate extends Component {

  componentDidMount() {
    const {markdownRemark} = this.props.data;
    const post = markdownRemark.frontmatter;
    window.analytics.page(post.meta_title + '| LimeProxies', {
      name: 'Use Cases',
      title: post.meta_title + ' | LimeProxies',
    });
  }

  
  render () {
    const { markdownRemark, site } = this.props.data // data.markdownRemark holds our post data
    const { html } = markdownRemark
    const post = markdownRemark.frontmatter
    
    const siteUrl = site.siteMetadata.siteUrl
    const path = post.path
    const finalPath = path.replace(/^\/|\/$/g, '')
    
    return (
      <main className="use-case">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={`${post.meta_title}`} />
          <meta name="description" content={`${post.description}`} />
          <meta name="keywords" content={`${post.yoast_keyword}`} />
          <link rel="canonical" href={`${siteUrl}${finalPath}`} />
          <title>{post.meta_title}</title>
        </Helmet>
  
        <Header />
  
        <section className="usecases_header">
          <div className="ui container">
            <div className="usecases_header__title">
              <h1 className="title t-h1">{post.title}</h1>
            </div>
            <div className="usecases_header__img">
              <ImageObserver src={post.heronail} />
            </div>
            <div className="usecases_header__text">
              <p className="t-p-lg">{post.subtitle}</p>
            </div>
            <div className="usecases_header__form home_header_item__form">
              <form action="">
                <input type="email" placeholder="Enter your email" />
                <input type="submit" value="Get Started" />
              </form>
            </div>
            <div className="usecases_header__link">
              <p>...or see <Link to="/pricing">pricing</Link></p>
            </div>
          </div>
        </section>
  
        <section className="usecases_text">
          <div className="custom-container">
            <div className="usecase-content" dangerouslySetInnerHTML={{ __html: html }} />
          </div>
          <SectionQuestions />
          <SectionFeatures />
          <SectionLove />
          <SectionStarted />
          <Footer />
        </section>
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
        title
        subtitle
        heronail
        path
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`