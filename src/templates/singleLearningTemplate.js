import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import classNames from 'classnames'

// import classNames from 'classnames'
// import { Button } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'
import Observer from '@researchgate/react-intersection-observer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faTwitter,
  faFacebookF,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons'
import {
  faHandPointRight
} from '@fortawesome/free-regular-svg-icons' 

import ImageObserver from '../layout/observer-image-target'
import manipulators from '../utils/manipulators'
import Header from '../layout/header-non-sticky'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

export default class BlogPost extends Component {
  state = {
    isVisible: false,
    targetDistance: 0,
    scrollDistance: 0
  }

  refMarker = React.createRef()

  handleScroll = () => {
    this.setState({ scrollDistance: window.pageYOffset })

    if (this.state.scrollDistance > 40 && !this.state.targetDistance) {
      let currentTargetDistance = this.refMarker.current.getBoundingClientRect().top + window.pageYOffset - window.innerHeight
      this.setState({ targetDistance: currentTargetDistance })
    }
  }

  handleChange = event => {
    this.setState({
      isVisible: event.isIntersecting ? true : false
    })
  }

  componentDidMount() {
    //Disqus widget application
    // const script = document.createElement("script");
    // script.src = "//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5badf7aa95d9c2f9";
    // script.async = true;
    // document.body.appendChild(script);

    (function () { // DON'T EDIT BELOW THIS LINE
      var d = document, s = d.createElement('script');
      s.src = 'https://purple-rain.disqus.com/embed.js';
      s.setAttribute('data-timestamp', +new Date());
      (d.head || d.body).appendChild(s);
    })();

    const { markdownRemark } = this.props.data
    const post = markdownRemark
    window.analytics.page(post.frontmatter.title,"| Limeproxies");

    if (typeof window !== 'undefined') {
      // window.analytics.page(title);
      window.addEventListener('scroll', this.handleScroll, false)
      console.log(this.props.data);
    }
  }

  openTwitterWindow = () => {
    const { markdownRemark, site } = this.props.data
    const pageContext = this.props.pageContext
    const { template } = pageContext
    const post = markdownRemark
    const siteUrlblog = site.siteMetadata.siteUrl
    window.open(`https://twitter.com/intent/tweet/?text=${post.frontmatter.title}&url=${siteUrlblog}resources/${template}${post.frontmatter.path}%2F&via=limeproxies`,'popup','width=600,height=600,scrollbars=no,resizable=no');
  }

  openFbWindow = () => {
    const { markdownRemark, site } = this.props.data
    const pageContext = this.props.pageContext
    const { template } = pageContext
    const post = markdownRemark
    const siteUrlblog = site.siteMetadata.siteUrl
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${siteUrlblog}resources/${template}${post.frontmatter.path}`,'popup','width=600,height=600,scrollbars=no,resizable=no');
  }


  openLinkedIn = () => {
    const { markdownRemark, site } = this.props.data
    const pageContext = this.props.pageContext
    const { template } = pageContext
    const post = markdownRemark
    const siteUrlblog = site.siteMetadata.siteUrl
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${siteUrlblog}resources/${template}${post.frontmatter.path}&title==${post.frontmatter.title}&summary=${post.frontmatter.excerpt}&source=${siteUrlblog}`,'popup','width=600,height=600,scrollbars=no,resizable=no');
  }

  render() {
    const pageContext = this.props.pageContext
    const { next, prev, template } = pageContext
    // const { activeIndex } = this.state
    // console.log(this.props.data)
    const { markdownRemark, site } = this.props.data
    // const { author } = this.props.data

    const post = markdownRemark
    // const authorData = author.edges[0].node.frontmatter

    const siteUrl = site.siteMetadata.siteUrl
    const path = post.frontmatter.path

    // post['age'] = manipulators.dateDiff(manipulators.parseDate(post.frontmatter.date), manipulators.parseDate(manipulators.getDateToday()))
    let frontmatter = post.frontmatter 

    if (!post.frontmatter.tags) {
      post.frontmatter.tags = ['Others']
    } 


    let progressPercent = 0

    if (typeof window !== 'undefined') {
      if (this.state.targetDistance) {
        progressPercent = this.state.scrollDistance / this.state.targetDistance * 100
        progressPercent = progressPercent.toFixed(2)
      }
    }

    return (
      <main className="article">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={`${markdownRemark.frontmatter.meta_title}`} />
          <meta name="description" content={`${post.frontmatter.description}`} />
          <meta name="keywords" content={`${post.frontmatter.yoast_keyword}`} />

          <meta name="twitter:card" content="summary_large_image"/>
          <meta property="twitter:title" content={`${post.frontmatter.title} | Limeproxiess`}/>
          <meta property="twitter:description" content={post.frontmatter.excerpt}/>
          <meta property="twitter:image" content={`https://purple-rain.netlify.com${post.frontmatter.thumbnail}`}/>
          <meta name="twitter:image:width" value= "280" />
          <meta name="twitter:image:height" value= "150" />
          <meta property="twitter:url" content={`${siteUrl}resources/${template}${post.frontmatter.path}`}/>
          

          <meta property="og:title" content={`${post.frontmatter.title} | Limeproxiess`}/>
          <meta property="og:site_name" content={`${post.frontmatter.title} | Limeproxiess`}/>
          <meta property="og:description" content={post.frontmatter.excerpt}/>
          <meta property="og:image" content={`${post.frontmatter.thumbnail}`}/>
          <meta property="og:image:secure_url" content={`${post.frontmatter.thumbnail}`}/>
          <meta property="og:image:width" content="1500"/>
          <meta property="og:image:height" content="682"/>
          <meta property="og:url" content={`${siteUrl}resources/${template}${post.frontmatter.path}`}/>

          <meta property="og:type" content="blog"/>
          <meta property="og:locale" content="en_US"/>


          <link rel="canonical" href={`${siteUrl}resources/${template}${path}`} />
          { 
            post.meta_title ? <title>{post.frontmatter.meta_title} | Limeproxies</title> :  <title>{post.frontmatter.title} | Limeproxies</title>
          }
        </Helmet>

        <Header />

        <div className={classNames("post-header", { 
          'active' : !this.state.isVisible,
          'inactive' : this.state.isVisible
        })}>
          <div className="post-header-main">
            <div className="post-header-info">
              <Link to="/resources"><ImageObserver classSet="logo-orig" src={require("../images/logo.svg")} altString="Logo" /> </Link>
              <div className="t-h3 mr-2">{post.frontmatter.title}</div>
            </div>
            <div className="post-header-share">
              <div className="t-p-sm mr-2">Share This</div>
              <div className="mr-3">
                <FontAwesomeIcon icon={faHandPointRight} />
              </div>

               <span  target="popup" onClick={this.openFbWindow} return="false">
                <div className="share-icon share-icon-fb">
                    <FontAwesomeIcon icon={faFacebookF} />
                </div>
              </span>

              <span target="popup" onClick={this.openTwitterWindow} return="false">
                <div className="share-icon share-icon-tw">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
              </span>

              <span target="popup" onClick={this.openLinkedIn} return="false">
                <div className="share-icon share-icon-li">
                  <FontAwesomeIcon icon={faLinkedin} />
                </div>
              </span>

            </div>
          </div>
          <div className="post-header-progress">
            <div className="progress-gray"></div>
            <div className="progress-blue" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>
        <section className="article-options">
          <div className="article-options-wrapper">
            <div className="ui custom-container">
              <ul>
                <li><a href="/resources/best-practices" className={template === 'best-practices' ? 'active' : 'inactive'}>Best Practices</a></li>
                <li><a href="/resources/tutorials" className={template === 'tutorials' ? 'active' : 'inactive'}>Tutorials</a></li>
                <li><a href="/resources/videos" className={template === 'videos' ? 'active' : 'inactive'}>Videos</a></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="article_banner">
          <div className="ui custom-container">
            <div className="article_banner_wrap">
              <Observer onChange={this.handleChange}><p className="trigger-header">Trigger Header</p></Observer>
              <ImageObserver src={frontmatter.thumbnail} altString=""/>
            </div>
          </div>
        </section>
        
        <section className="article-content">
          <div className="custom-container article-border resources-content">
              <div className="social-share-wrapper"> 
                <ul>
                  <li className="for-facebook">
                    <a onClick={this.openFbWindow}>
                      <FontAwesomeIcon icon={faFacebookF} className="social-share"/>
                    </a>
                  </li>
                  <li className="for-twitter">
                    <a onClick={this.openTwitterWindow}>
                      <FontAwesomeIcon icon={faTwitter} className="social-share"/>
                    </a>
                  </li>
                  <li className="for-linkedin">
                    <a onClick={this.openLinkedIn}>
                      <FontAwesomeIcon icon={faLinkedin} className="social-share"/>
                    </a>
                  </li>
                </ul>
              </div>
            <h1 className="article__title t-h1"> {post.frontmatter.title} </h1>
            <div style={{paddingTop: '50px'}}className="post-body-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
        </section>

        {/*<section className="blog-header blog-header_wrapper">
          <div className="ui container">
              <h1 className="article__title t-h1">
                {post.frontmatter.title}
              </h1>
            </Observer>
          </div>
        </section>*/}

      {/*  <section className="article-content">
          <div className="custom-container article-border">
            <div className="article-content__social-media ">
               <Button className="article-content__social-media--button">Share</Button> 
              <div className="article-content__social-media--menu">
                <p>Follow us on:</p>
                <div className="social-menu_wrapper">
                  <a href="https://www.facebook.com/limeproxiesonline/"
										target="_blank"
										rel="noopener noreferrer">
                    <i className="icon"><img src={require("../images/facebook.png")} alt="icon" /></i>
                  </a>
                  <a href="https://www.instagram.com/limeproxies/"
										target="_blank"
										rel="noopener noreferrer">
                    <i className="icon"><img src={require("../images/instagram.png")} alt="icon" /></i>
                  </a>
                  <a href="https://twitter.com/limeproxies"
										target="_blank"
										rel="noopener noreferrer">
                    <i className="icon"><img src={require("../images/twitter.png")} alt="icon" /></i>
                  </a>
                  <a className="yt" href="https://www.youtube.com/channel/UCmRhZT7mgQAMc_A_ekDDydA"
										target="_blank"
										rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </div>
              </div>
            </div> /*/}

        <section className="article-content">
          <div className="custom-container article-border">

            <div className="article-author">
              <p className="article-author__name">By { post.frontmatter.author }</p>
              <p className="article-author__category">In {
                post.frontmatter.tags.map((tag, i) => (
                  <Link key={tag} to={`/tags/${manipulators.slugify(tag)}`}>
                    <span>{tag}</span>
                    <span className={
                      classNames({
                        'd-none': i === post.frontmatter.tags.length - 1
                      })
                    }>, &nbsp;</span>
                  </Link>
                ))
              }</p>
              <p className="article-author__date">{ manipulators.ageCalculator(post.age) }</p>
              <p className="article-author__time">{ post.timeToRead } min read</p>
              <p className="article-author__comment">Add comment</p>
            </div> 
            
          </div>
        </section>

        <div ref={this.refMarker}></div>

        <section className={`article-navigation ${progressPercent >= 100 ? 'active' : 'inactive'} ${ progressPercent >= 125 ? 'footer-range' : ''}`}>
          <div className="article-navigation__next">
            { next && <Link to={`/tutorials/${template}${next.frontmatter.path}`} className="next-link">
                <img src={require("../images/prev.png")} className="icon-next"/> 
                <span className="text-next">Prev</span>
                <span className="title-next">{next.frontmatter.title}</span>
            </Link>}
          </div>

          <div className="article-navigation__prev">
            { prev && <Link to={`/tutorials/${template}${prev.frontmatter.path}`} className="prev-link"> 
                <span className="text-prev">Next</span>
                <span className="title-prev">{prev.frontmatter.title}</span>
                <img src={require("../images/next.png")} className="icon-prev"/> 
            </Link> }
          </div>
        </section>

        <section className="resources-comment">
          {/* <div className="article-comment__author">
            <h2 className="article_comment--title">About the author</h2>
            <div className="article-comment__author--info">
              <div className="author-avatar">
                <img src={authorData.avatar} alt="img" />
              </div>
              <div className="article-comment-author--info-holder">
                <p className="author-name">{authorData.title}</p>
                <p>{authorData.bio}</p>
                <Button className="view-posts">View all post</Button>
              </div>
            </div>
          </div> */}
          <div className="ui custom-container">
            <div className="disqus" id="disqus_thread"></div>
          </div>
        </section>

        <SectionStarted />
        <Footer />
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
        yoast_keyword
        description
        title
        tags
        excerpt
        thumbnail
        path
      },
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`