import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

import classNames from 'classnames'
import { Helmet } from 'react-helmet'

import ImageObserver from '../layout/observer-image-target'
import manipulators from '../utils/manipulators'
import SectionStarted from '../layout/section-started'
import Card from '../layout/card-blog'
import Header from '../layout/header'
import Footer from '../layout/footer'

export default class Blog extends Component {
  state = { 
    numPosts: 6,
    allNodesCount: 0
  }

  allNodesCountHolder = 0

  loadMoreHandle = () => (
    this.setState({ numPosts: this.state.numPosts + 6 })
  )

  componentDidMount() {
    window.analytics.page('Helpful Tips and News About Proxies | LimeProxies Blog', {
      name: 'Blog',
      title: 'Helpful Tips and News About Proxies | LimeProxies Blog',
    });

    if (!this.state.allNodesCount && this.allNodesCountHolder) {
      this.setState({ allNodesCount: this.allNodesCountHolder })
    }
  }

  render() {
    const data = this.props.data;
    const siteUrlBlog = data.site.siteMetadata.siteUrl

    let featuredNode
    let allNodes = []

    const { edges } = this.props.data.blog

    edges.forEach(({node}) => {
      if (node.frontmatter.featured && !featuredNode) {
        featuredNode = node;
        featuredNode['age'] = manipulators.dateDiff(manipulators.parseDate(featuredNode.frontmatter.date), manipulators.parseDate(manipulators.getDateToday()))
      }

      if (node !== featuredNode) {
        // node['age'] = manipulators.dateDiff(manipulators.parseDate(node.frontmatter.date), manipulators.parseDate(manipulators.getDateToday()))

        if (!node.frontmatter.excerpt) {
          node.frontmatter.excerpt = node.excerpt
        }

        allNodes.push(node)
      }
    })

    this.allNodesCountHolder = allNodes.length
    allNodes = allNodes.slice(0, this.state.numPosts)

    return (
      <main className="blog">
        <Helmet>
			    <meta charSet="utf-8" />
          <meta name="title" content="Helpful Tips and News About Proxies | LimeProxies Blog" />
          <meta name="description" content="Learn more and get some helpful tips and knowledge from the LimeProxies Blogs. Here on LimeProxies we make your web surfing happier and easy today." />
          <meta name="keywords" content="vpn proxy server, best proxy service, server seo" />
          <link rel="canonical" href={`${siteUrlBlog}blog`} />
          <title>Helpful Tips and News About Proxies | LimeProxies Blog</title>
        </Helmet>

        <Header/>

        <section className="blog-header blog-header_wrapper">
          <div className="ui container pos-relative">
            <div className="blog-header__content-wrapper">
              <h1 className="blog-header__title t-h1">Blog</h1>
            </div>
          </div>

        </section>

        <section className="blog-content">
          <div className={"ui container blog-content__wrapper"}>
            { featuredNode ? 
              <div className="blog-content__featured-content">
                <Link to={`/blog${featuredNode.frontmatter.path}`} className="featured-image">
                  <ImageObserver src={featuredNode.frontmatter.featurednail} altString=""/>
                </Link>
                <div className="featured-content-holder">
                  <h1 className="t-h2-md">{featuredNode.frontmatter.title}</h1>
                  <div className="featured-author-holder">
                    <p>By {featuredNode.frontmatter.author}</p>
                    <p>&nbsp; | &nbsp;</p>
                    <p className="hide-mobile">{manipulators.ageCalculator(featuredNode.age)}</p>
                    <p className="hide-mobile">&nbsp; | &nbsp;</p>
                    <p>{featuredNode.timeToRead} minute{featuredNode.timeToRead > 1 ? 's' : null} read</p>
                  </div>
                  <p className="hover-content">Do you want to exponentially increase your e-commerce sales? The very</p>

                  <hr />

                  <div className="read-more-holder">
                    <Link to={`/blog${featuredNode.frontmatter.path}`} className="read-more t-h4">Read more</Link>
                    {/* <Button className="btn btn--wob btn--lg">Share</Button> */}
                  </div>
                </div>
              </div> : null
            }

            <div className="d-flex wrap justify-space">
              {allNodes.map((node) => {
                // console.log(node)
                let frontmatter = node.frontmatter
                let postThumb = "/assets/blog-post-five.png"

                let thumbnailRegex = /\/assets\/(.*?)\.(jpg|png|jpeg|gif)/

                if (!frontmatter.thumbnail) {
                  let myMatch = node.html.match(thumbnailRegex)

                  if(node.html.match(thumbnailRegex)) {
                    postThumb = myMatch[0]
                  }
                }
                else {
                  postThumb = frontmatter.thumbnail
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

export const pageQuery = graphql`
  query BlogIndexQuery {
    blog: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
      filter: { fileAbsolutePath: {regex : "\/blog/"} },
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            path
            author
            date
            excerpt
            thumbnail
            featured
            featurednail
          },
          excerpt,
          timeToRead,
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