import React, { Component } from 'react'
import { Link } from 'gatsby'
// import { Link } from 'gatsby'

import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
	faArrowRight
} from '@fortawesome/free-solid-svg-icons'

export default class Card extends Component {
	state = {
		active: false
	}

	activateCard = () => {
		this.setState({ active: true })
	}

	deactivateCard = () => {
		this.setState({ active: false })
	}
 
	render() {
		const {
			title,
			excerpt,
			thumbnail,
			hiddentype,
			path
		} = this.props.details

		let finalPath = path
		if(hiddentype === 'article') {finalPath = `/best-practices${path}`}
		if(hiddentype === 'resource') {finalPath = `/tutorials${path}`}
		if(hiddentype === 'video') {finalPath = `/videos${path}`}

		return (
			<Link to={finalPath}
				onMouseEnter={this.activateCard} 
				onMouseLeave={this.deactivateCard} 
				className={classNames("resource-card", { active: this.state.active })}>
				{ hiddentype === 'video' ? 
					<div className="resource-card__video">
						<div className="resource-card__vidthumb bg" style={{backgroundImage: `url(${thumbnail})`}}></div>
						<div className="resource-card__vidoverlay">
							<div className="resource-card__play">
								<FontAwesomeIcon icon={faPlay} />
							</div>
							<div className="resource-card__vidtitle t-h3">{title}</div>
						</div>
					</div>
					: 
					<div className="resource-card__video">
						<div className="resource-card__vidthumb bg" style={{backgroundImage: `url(${thumbnail})`}}></div>
						<div className="resource-card__vidoverlay">
							<div className="resource-card__vidtitle t-h3">{title}</div>
						</div>
					</div>
				}
				<div className="resource-card__type">
					<div className="resource-card__left">
						<span className="resource-card__hover t-p t-blue">
							{ hiddentype === 'article' ? 'Read this best-practice' : null }
							{ hiddentype === 'resource' ? 'View this tutorial' : null }
							{ hiddentype === 'video' ? 'Play this video' : null }
						</span>
						<span className="resource-card__left-default t-p">
              { hiddentype === 'article' ? 'Best-practice' : null }
							{ hiddentype === 'resource' ? 'Tutorial' : null }
							{ hiddentype === 'video' ? 'Video' : null }
						</span>
					</div>
					<div className="resource-card__right">
						<span className="resource-card__hover t-p t-blue">
							<FontAwesomeIcon icon={faArrowRight} />
						</span>
					</div>
				</div>
			</Link>

      ///////////////////////////////////////////////////////////////////////////////////
      //THIS IS BACKUP IN CASE THEY DECIDE TO REDO CHANGES/DESIGN [THIS IS THE DEFAULT]//
      ///////////////////////////////////////////////////////////////////////////////////

      // <Link to={finalPath}
      // onMouseEnter={this.activateCard} 
      // onMouseLeave={this.deactivateCard} 
      // className={classNames("resource-card", { active: this.state.active })}>
      // { hiddentype === 'video' ? 
      //   <div className="resource-card__video">
      //     <div className="resource-card__vidthumb bg" style={{backgroundImage: `url(${thumbnail})`}}></div>
      //     <div className="resource-card__vidoverlay">
      //       <div className="resource-card__play">
      //         <FontAwesomeIcon icon={faPlay} />
      //       </div>
      //       <div className="resource-card__vidtitle t-h3">{title}</div>
      //     </div>
      //   </div>
      //   : 
      //   <div className="resource-card__nonvideo">
      //     <div className="resource-card__info">
      //       <div className="resource-card__title t-h3">{title}</div>
      //       { hiddentype === 'article' ? 
      //         <p className="resource-card___excerpt">{excerpt}</p>
      //         : null }
      //     </div>
      //     <div className="resource-card__graphic">
      //       <div className="resource-card__pic bg" style={{backgroundImage: `url(${thumbnail})`}}></div>
      //       <div className="resource-card__picoverlay"></div>
      //     </div>
      //   </div>
      // }
      // <div className="resource-card__type">
      //   <div className="resource-card__left">
      //     <span className="resource-card__hover t-p t-blue">
      //       { hiddentype === 'article' ? 'Read this best-practice' : null }
      //       { hiddentype === 'resource' ? 'View this tutorial' : null }
      //       { hiddentype === 'video' ? 'Play this video' : null }
      //     </span>
      //     <span className="resource-card__left-default t-p">
      //       { hiddentype === 'article' ? 'Best-practice' : null }
      //       { hiddentype === 'resource' ? 'Tutorial' : null }
      //       { hiddentype === 'video' ? 'Video' : null }
      //     </span>
      //   </div>
      //   <div className="resource-card__right">
      //     <span className="resource-card__hover t-p t-blue">
      //       <FontAwesomeIcon icon={faArrowRight} />
      //     </span>
      //   </div>
      // </div>
      // </Link>
		)
	}
}