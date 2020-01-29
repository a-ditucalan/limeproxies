import React from 'react'

import { Helmet } from 'react-helmet'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
// 	faChevronRight
// } from '@fortawesome/free-solid-svg-icons'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import SectionAccordion from '../layout/faq-accordion'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

// const faqQandAData = [
// 	{
// 		question: "How many concurrent connections can be used?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	{
// 		question: "What type of authentication is provided?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	{
// 		question: "What's the difference between premium and private proxies?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	{
// 		question: "What is your refund policy?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	{
// 		question: "Can I test a proxy before purchasing?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	{
// 		question: "What type of authentication is provided?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	},
// 	// {
// 	// 	question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
// 	// 	answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	// },
// 	// {
// 	// 	question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
// 	// 	answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	// },
// 	// {
// 	// 	question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
// 	// 	answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// 	// },
// ]


const faqCategoriesData = [
	{
		img: require('../images/FAQ-01.png'),
		title: 'Getting Started',
		articles: 9
	},
	{
		img: require('../images/FAQ-02.png'),
		title: 'Account & Billing',
		articles: 18
	},
	{
		img: require('../images/FAQ-03.png'),
		title: 'How to use Guide',
		articles: 27
	},
	{
		img: require('../images/FAQ-04.png'),
		title: 'Technical',
		articles: 23
	},
	{
		img: require('../images/FAQ-05.png'),
		title: 'Troubleshooting Guides',
		articles: 4
	},
	{
		img: require('../images/FAQ-06.png'),
		title: 'Video Tutorials',
		articles: 14
	}
]



export default class Quotes extends React.Component {
  
  componentDidMount() {
    window.analytics.page('Proxy Server Frequently Asked Questions | LimeProxies', {
      name: 'FAQ',
      title: 'Proxy Server Frequently Asked Questions | LimeProxies',
    });
  }
  
  render() {
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

		return (
			<main className="faq">
        <Helmet>
			    <meta charSet="utf-8" />
          <meta name="title" content="LimeProxies FAQ - Our Proxy Service Explained" />
          <meta name="description" content="Read most of the Frequently Asked Question and Let us help you to your success by proving you our premium support through our innovative Campfire Support system" />
          <meta name="keywords" content="yourprivateproxy, fast working proxy, safe proxy websites" />
          <link rel="canonical" href={`${siteUrl}faq`} />
          <title>Proxy Server Frequently Asked Questions | LimeProxies</title>
        </Helmet>
        <Header />

				<div className="spacing--top spacing--bottom blue-lime-gradient">
					<div className="ui container px-3 px-lg-0">
						<h1 className="t-h1 t-white t-center mb-4">Frequently Asked Questions</h1>
						<p className="t-p-lg t-white t-center">Here are some already answered</p>
					</div>
				</div>

				{/* <div className="spacing--top">
					<div className="ui container px-3 px-lg-0">
						<div className="faq__questions">
							{ faqQandAData.map((item, i) => (
								<div key={i} className="faq__question mb-2">
									<div className="faq__question-actual">
										<div className="t-black mr-3">⏹</div>
										<div className="t-p">{item.question}</div>
									</div>
									<div className="chevron">
										<FontAwesomeIcon icon={faChevronRight} />
									</div>
								</div>
							))}							
						</div>
						<div className="t-p-md t-blue mt-5 t-right">Show More >></div>
					</div>
				</div> */}
				<div className="spacing--top-half">
					<SectionAccordion />
				</div>

				<div className="spacing--top">
					<div className="ui container px-3 px-lg-0">
						<div className="faq__categories-title mb-5 pb-lg-3">
							<ImageObserver src={require('../images/FAQ-00.png')} classSet="mr-4" />
							<h2 className="t-h2 mt-0">Or choose from categories</h2>
						</div>
						
						<div className="faq__categories spacing--bottom">
							{ faqCategoriesData.map(item => (
								<a href="http://help.limeproxies.com/en/" target="_blank" key={item.title} className="faq-category mb-3">
									<div className="faq-category__pic mr-3">
										<ImageObserver src={item.img} />
									</div>
									<div className="faq-category__info">
										<p className="t-h3 mb-2">{item.title}</p>
										<p className="t-oblique">{item.articles} articles in this collection</p>
									</div>
								</a>
							))}
						</div>
					</div>
				</div>

				<SectionStarted />
				<Footer/>
			</main>
		)
  }
}
export const query = graphql`
  query faq {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`