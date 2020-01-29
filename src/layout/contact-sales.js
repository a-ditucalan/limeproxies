import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  // faInstagram,
  faFacebookF,
  // faGooglePlusG,
	faYoutube
} from '@fortawesome/free-brands-svg-icons'

import IconIg from '../jsx/icon-ig'
import IconPhone from '../jsx/icon-phone'
import IconLiveSupport from '../jsx/icon-live-support'
import IconMailOpen from '../jsx/icon-mail-open'

import ContactForm from '../layout/generic-contact-form'

import getInTouch from '../dynamic/contact.json'

export default class Sales extends Component {
	render() {
		return (
			<div className="sales">
        <section>
					<div className="ui container">
						<h2 className="sales__title t-h2-lg">{getInTouch.getInTouchTitle}</h2>
						<p className="sales__text t-p-lg">{getInTouch.getInTouchDescription}</p>
						<div className="sales__wrapper">
							<div className="sales__form">
								<ContactForm />
							</div>
							<div className="sales__connect">
								<a href={`tel:${getInTouch.formContactNumber}`} className="sales__connect-item btn btn--wob t-p-lg">
									<IconPhone />
									<span>{getInTouch.formContactNumber}</span>
								</a>
								<a href={`mailto:${getInTouch.formContactEmail}`} className="sales__connect-item btn btn--gray t-p-lg">
									<IconMailOpen />
									<span>{getInTouch.formContactEmail}</span>
								</a>
								<div className="sales__social sales__connect-item">
									<a href={getInTouch.facebookLInk}
										className="sales__social-icon sales__social-icon--fb"
										target="_blank"
										rel="noopener noreferrer">
										<div className="bg-gradient"></div>
										<FontAwesomeIcon icon={faFacebookF} />
									</a>
									<a href={getInTouch.instagramLink}
										className="sales__social-icon sales__social-icon--ig"
										target="_blank"
										rel="noopener noreferrer">
										<div className="bg-gradient"></div>
										{/* <FontAwesomeIcon icon={faInstagram} /> */}
										<IconIg />
									</a>
									<a href={getInTouch.twitterLink}
										className="sales__social-icon sales__social-icon--tw"
										target="_blank"
										rel="noopener noreferrer">
										<div className="bg-gradient"></div>
										<FontAwesomeIcon icon={faTwitter} />
									</a>
									<a href={getInTouch.youtubeLink}
									target="_blank"
									rel="noopener noreferrer"
									className="sales__social-icon sales__social-icon--gp">
										<div className="bg-gradient"></div>
										<FontAwesomeIcon icon={faYoutube} />
									</a>
								</div>
								<div className="sales__live sales__connect-item btn btn--wob t-p-lg">
									<IconLiveSupport />
                  <a href={getInTouch.liveSupportLInk}>
									  <span>Live Support</span>
                  </a>
								</div>
							</div>
						</div>
						{/* <p className="sales__text t-p-lg">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p> */}
					</div>
				</section>
			</div>
		)
	}
}