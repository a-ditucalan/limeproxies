import React, { Component } from 'react'

import ContactForm from './generic-contact-form'

export default class GeneralInquiries extends Component {
	render() {
		return (
			<div className="inquiries">
        <section>
					<div className="ui container">
						<h2 className="inquiries__title t-h2-lg">Contact Us</h2>
						<p className="inquiries__text t-p-lg">Just fill out this form and we'll put you in touch with the right team.</p>

						<ContactForm />
						
					</div>
				</section>
			</div>
		)
	}
}