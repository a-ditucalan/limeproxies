import React, { Component } from 'react'
import { graphql } from 'gatsby'

import classNames from 'classnames'
import { Helmet } from 'react-helmet'

import manipulators from '../utils/manipulators'
import SectionStarted from '../layout/section-started'
import Card from '../layout/card-blog'
import Header from '../layout/header'
import Footer from '../layout/footer'

export default class SingleTagTemplate extends Component {
  state = { 
    numPosts: 6,
    allNodesCount: 0
  }

  allNodesCountHolder = 0

  loadMoreHandle = () => (
    this.setState({ numPosts: this.state.numPosts + 6 })
  )

  componentDidMount() {
    if (!this.state.allNodesCount && this.allNodesCountHolder) {
      this.setState({ allNodesCount: this.allNodesCountHolder })
    }

    const pageContext = this.props.pageContext
    window.analytics.page(pageContext.tagName);
  }

  render() {
    let allNodes = [];

    const pageContext = this.props.pageContext

    //console.log(pageContext)

    const posts = pageContext.posts

    posts.forEach((node, i) => {
      node['age'] = manipulators.dateDiff(manipulators.parseDate(node.frontmatter.date), manipulators.parseDate(manipulators.getDateToday()));
      allNodes.push(node);
    })

    this.allNodesCountHolder = allNodes.length
    allNodes = allNodes.slice(0, this.state.numPosts)

    const { site } = this.props.data 
    const siteUrl = site.siteMetadata.siteUrl

    return (
      <main className="blog">
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="canonical" href={`${siteUrl}`} />
          <title>{pageContext.tagName} | Limeproxies</title>
        </Helmet>

        <Header/>

        <section className="blog-header blog-header_wrapper">
          <div className="ui container pos-relative">
            <div className="blog-header__content-wrapper">
              <h1 className="blog-header__title t-h1">{pageContext.tagName}</h1>
            </div>
          </div>
        </section>

        <section className="blog-content">
          <div className={"ui container blog-content__wrapper"}>
            <div className="d-flex wrap">
              {allNodes.map((node) => {
                let frontmatter = node.frontmatter

                let postThumb = "/assets/blog-post-five.png"

                let thumbnailRegex = /\/assets\/(.*?)\.(jpg|png|jpeg|gif)/

                if (!node.frontmatter.thumbnail) {
                  let myMatch = node.html.match(thumbnailRegex)

                  if(node.html.match(thumbnailRegex)) {
                    postThumb = myMatch[0]
                  }
                }

                return (
                  <Card key={frontmatter.path}
                    thumbnail={postThumb}
                    title={frontmatter.title}
                    content={frontmatter.excerpt}
                    author={frontmatter.author}
                    time={node.timeToRead}
                    url={`/blog${frontmatter.path}`} />
                )
              })}
            </div>
            <div className={classNames({
              'load-more btn btn--lg': true,
              'd-none': this.state.numPosts > this.state.allNodesCount || allNodes.length < 6
            })}
              onClick={this.loadMoreHandle}>Load more</div>
          </div>
        </section>

        <SectionStarted />
        <Footer/>
      </main>
    )
  }
}

export const query = graphql`
query tags {
  site {
    siteMetadata {
      siteUrl
    }
  }
}
`