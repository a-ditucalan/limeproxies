import React, { Component } from 'react'

import ImageObserver from '../layout/observer-image-target'

const helpListData = [
	{
		header: 'Step-By-Step Tutorials:',
		listItems: [
			'How to order proxies from LimeProxies.com',
			'How to use the LimeProxies.com control panel',
			'How to use LimeProxies with Internet Explorer',
			'How to use LimeProxies with Mozilla Firefox',
			'How to use LimeProxies with Google Chrome',
			'How to use LimeProxies within PHP Code',
			'How to use LimeProxies within Java Code',
			'How to troubleshoot proxy connectivity issues'
		]
	},
	{
		header: 'Proxy Tools:',
		listItems: [
			'Proxy Availability Checker (Order Tool)',
			'Proxy Tester (Members Tool)',
			'Browser Privacy Test',
			'Lightweight “Check IP” API (checkip.instantproxies.com)',
			'Lightweight “Check Online” API (ping.instantproxies.com)'
		]
	}
]

const helpFaqData = [
	"How many concurrent connections can be used?",
	"What type of authentication is provided?",
	"What's the difference between premium and private proxies?",
	"What is your refund policy?",
	"Can I test a proxy before purchasing?",
	"What type of authentication is provided"
]

export default class Help extends Component {
	render() {
		return (
			<div className="help">
        <section>
					<div className="ui container">
						<div className="help__wrapper">
							<div className="help__tutorials">

								{helpListData.map((list) => (
									<div key={list.header} className="help__list-wrapper">
										<h2 className="help__title t-h2-lg">
											{list.header}
										</h2>
										<ul className="help__list">
											{list.listItems.map((item) => (
												<li className="t-p-md" key={item}>{item}</li>
											))}
										</ul>
									</div>
								))}

							</div>
							<div className="help-faq">
								<ImageObserver src={require('../images/help-questions.jpg')} altString="people holding question marks"/>
								<h2 className="help-faq__title t-h2">Frequently asked questions</h2>
								<ul>
									{helpFaqData.map((question) => (
										<li key={question}>
											<p className="t-p">{question}</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}