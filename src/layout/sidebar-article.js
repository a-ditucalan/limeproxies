import React, { Component } from 'react'
import { Link } from 'gatsby'

import ImageObserver from '../layout/observer-image-target'


export default class Card extends Component {
  render() {
    const thumbnail = this.props.thumbnail
    const title = this.props.title
    const content = this.props.content
    const author = this.props.author
    const time = this.props.time
    const url = this.props.url

    return (
      <Link to={url} className="article__post">
        <div className="article__thumbnail-holder article-thumbnail">
          <ImageObserver src={thumbnail} altString="Img" />
        </div>
        <div className="article article-holder">
          <h2 className="article-title t-h2">
            {title}
          </h2>
          <p className="article-content">
            {content}
          </p>
        </div>
        <div className="article__author-holder">
          <p className="article-author">By {author}</p>
          <p>&nbsp; | &nbsp;</p>
          <p className="article-time">{time} min read</p>
        </div>
      </Link>
    )
  }
}