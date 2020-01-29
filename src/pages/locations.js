import React from 'react'

import debounce from 'lodash.debounce'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import Footer from '../layout/footer'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import locations from '../dynamic/worldLocations.json'

const flagData = [
	{
		img: require('../images/flag_au.svg'),
		country: 'Australia',
    ips: '3,589,765 IPs',
    countryLink: '/australia-proxies'
	},
	{
		img: require('../images/us-flag.png'),
		country: 'United States',
    ips: '3,589,765 IPs',
    countryLink: '/us-proxies'
	},
	{
		img: require('../images/flag_gb.svg'),
		country: 'United Kingdom',
		ips: '3,589,765 IPs',
    countryLink: '/uk-proxies'
	},
	{
		img: require('../images/flag_de.svg'),
		country: 'Germany',
		ips: '3,589,765 IPs',
    countryLink: '/germany-proxies'
	},
	{
		img: require('../images/flag_dk.svg'),
		country: 'Denmark',
		ips: '3,589,765 IPs',
    countryLink: ''
	},
	{
		img: require('../images/flag_es.svg'),
		country: 'Spain',
		ips: '3,589,765 IPs',
    countryLink: ''
	},
	{
		img: require('../images/flag_fr.svg'),
		country: 'France',
		ips: '3,589,765 IPs',
    countryLink: ''
	},
	{
		img: require('../images/flag_no.svg'),
		country: 'Norway',
		ips: '3,589,765 IPs',
    countryLink: ''
	},
	{
		img: require('../images/flag_ca.svg'),
		country: 'Canada',
		ips: '3,589,765 IPs',
    countryLink: ''
	},
	{
		img: require('../images/flag_ie.svg'),
		country: 'Ireland',
		ips: '3,589,765 IPs',
    countryLink: ''
	},
	{
		img: require('../images/flag_pl.svg'),
		country: 'Poland',
		ips: '3,589,765 IPs',
    countryLink: ''
	},
	{
		img: require('../images/flag_be.svg'),
		country: 'Belgium',
		ips: '3,589,765 IPs',
    countryLink: ''
	}
]

const locationsData = [
	{
		region: 'Asia',
		countries: [
			'Afghanistan',
			'Armenia',
			'Azerbaijan',
			'Bahrain',
			'Bangladesh',
			'Bhutan',
			'Brunei',
			'Cambodia',
			'China',
			'Gyprus',
			'Georgia',
			'India',
			'Indonesia',
			'Iran',
			'Iraq',
			'Israel',
			'Japan',
			'Jordan',
			'Kazakhstan',
			'Kuwait',
			'Kyrgyzstan',
			'Laos',
			'Lebanon',
			'Malaysia',
			'Maldives',
			'Mongolia',
			'Myanmar (formerly Burma)',
			'Nepal',
			'North Korea',
			'Oman',
			'Pakistan',
			'Palestine',
			'Philippines',
			'Qatar',
			'Russia',
			'Taiwan',
			'Tajikistan',
			'Thailand',
			'Timor-Leste',
			'Turkey',
			'Turkmenistan',
			'United Arab Emirates (UAE)',
			'Uzbekistan',
			'Vietnam',
			'Yemen'
		]
	},
	{
		region: 'Africa',
		countries: [
			'Algeria',
			'Angola',
			'Benin',
			'Botswana',
			'Burkina Faso',
			'Burundi',
			'Cabo Verde',
			'Cameroon',
			'Central African Republic (CAR)',
			'Chad',
			'Comoros',
			'Congo, Democratic Republic of the',
			'Congo, Republic of the',
			'Cote d\'Ivoire',
			'Djibouti',
			'Egypt',
			'Equatorial Guinea',
			'Eritrea',
			'Eswatini (formerly Swaziland)',
			'Ethiopia',
			'Gabon',
			'Gambia',
			'Ghana',
			'Guinea',
			'Guinea-Bissau',
			'Kenya',
			'Lesotho',
			'Liberia',
			'Libya',
			'Madagascar',
			'Malawi',
			'Mali',
			'Mauritania',
			'Mauritius',
			'Morocco',
			'Mozambique',
			'Mauritani',
			'Namibia',
			'Niger',
			'Nigeria',
			'Rwanda',
			'Sao Tome and Principe',
			'Senegal',
			'Seychelles',
			'Sierra Leone',
			'Somalia',
			'South Africa',
			'South Sudan',
			'Sudan',
			'Tanzania',
			'Togo',
			'Tunisia',
			'Uganda',
			'Zambia',
			'Zimbabwe'
		]
	},
	{
		region: 'Europe',
		countries: [
			'Albania',
			'Andorra',
			'Armenia',
			'Austria',
			'Azerbaijan',
			'Belarus',
			'Belgium',
			'Bosnia and Herzegovina',
			'Bulgaria',
			'Croatia',
			'Cyprus',
			'Czechia',
			'Denmark',
			'Estonia',
			'Finland',
			'France',
			'Georgia',
			'Germany',
			'Greece',
			'Hungary',
			'Iceland',
			'Ireland',
			'Italy',
			'Kazakhstan',
			'Kosovo',
			'Latvia',
			'Liechtenstein',
			'Lithuania',
			'Luxembourg',
			'Malta',
			'Moldova',
			'Monaco',
			'Montenegro',
			'Netherlands',
			'North Macedonia (formerly Macedonia)',
			'Norway',
			'Poland',
			'Portugal',
			'Romania',
			'Russia',
			'San Marino',
			'Serbia',
			'Slovakia',
			'Slovenia',
			'Spain',
			'Sweden',
			'Switzerland',
			'Turkey',
			'Ukraine',
			'United Kingdom (UK)',
			'Vatican City (Holy See)'
		]
	},
	{
		region: 'Australia & Oceania',
		countries: [
			'Australia',
			'Fiji',
			'Kiribati',
			'Marshall Islands',
			'Micronesia',
			'Nauru',
			'New Zealand',
			'Palau',
			'Papua New Guinea',
			'Samoa',
			'Solomon Islands',
			'Tonga',
			'Tuvalu',
			'Vanuatu'
		]
	},
	{
		region: 'North America',
		countries: [
			'Antigua and Barbuda',
			'Bahamas',
			'Barbados',
			'Belize',
			'Canada',
			'Costa Rica',
			'Cuba',
			'Dominica',
			'Dominican Republic',
			'El Salvador',
			'Grenada',
			'Guatemala',
			'Haiti',
			'Honduras',
			'Jamaica',
			'Mexico',
			'Nicaragua',
			'Panama',
			'Saint Kitts and Nevis',
			'Saint Lucia',
			'Saint Vincent and the Grenadines',
			'Trinidad and Tobago',
			'United States of America (USA)'
		]
	},
	{
		region: 'South America',
		countries: [
			'Argentina',
			'Bolivia',
			'Brazil',
			'Chile',
			'Colombia',
			'Ecuador',
			'Guyana',
			'Paraguay',
			'Peru',
			'Suriname',
			'Uruguay',
			'Venezuela'
		]
	}
]

const faqData = [
	{
		question: `How many concurrent connections can be used?`,
		answer: `By default we allow up to 100 concurrent threads. This limit can be increased upon request.`
	},
	{
		question: `What type of authentication is provided?`,
		answer: `By default proxies are authenticated by your IP. Maximum of IPs will be allowed. On request we can also authenticate by username/password.`
	},
	{
		question: `Can I test a proxy before purchasing?`,
		answer: `Sure. Please signup here for a free test proxy. You may also contact support to request a test proxy.`
	},
	{
		question: `Are there any service restrictions?`,
		answer: `Yes. Proxies cannot be used for e-mailing, spam, abuse, accessing e-commerce sites such paypal, ebay and access to mailing sites will be blocked. Scrapebox for Spam, xRumer and/or any forum commenting software usage is not allowed.`
  },
  {
		question: `What's the difference between premium and private proxies?`,
		answer: `Premium Proxies have 1gbps dedicated bandwidth speed and virgin IPs which are never before used. Private Proxies have 100 mbps bandwidth and uses recycled IPs.`
  },
  {
		question: `What is your refund policy?`,
		answer: `LimeProxies believes in complete customer satisfaction. If you are not satisfied with the proxies, we offer a full money back if requested within 3 days. Please read our refund policy for full details.`
	},
]

export default class location extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			countryCol: this.getCountryColumns()
		}
	}

	getCountryColumns = () => {
		var countryColumns = 5
		if (typeof window !== 'undefined') {
			if (window.innerWidth < 992) { countryColumns = 4 }
			if (window.innerWidth < 768) { countryColumns = 3 }
			if (window.innerWidth < 576) { countryColumns = 2 }
		}

		return countryColumns
	}

	componentDidMount() {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', debounce(() => {
				this.setState({ countryCol: this.getCountryColumns() })
			}, 100, true))
    }

    window.analytics.page('Proxy Servers in Multiple Geographic Locations | LimeProxies', {
      name: 'Locations',
      title: "Proxy Servers in Multiple Geographic Locations | LimeProxies",
    });
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const from = "Location page email form";

    // Add your own unique ID here or we will automatically assign an anonymousID
    window.analytics.identify('',{
      email,
      from
    });
  }

	render() {
    var countryMatrix;
    const { email } = this.state;

    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

		return (
			<main className="locations">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={locations.meta_title}/>
          <meta name="description" content={locations.description} />
          <meta name="keywords" content={locations.yoast_keyword} />
          <link rel="canonical" href={`${siteUrl}locations`} />
          <title>{locations.meta_title}</title>
        </Helmet>

				<Header />

				<section className="locations-banner">
					<div className="ui container">
						<h1 className="locations-banner__title t-h1">
							{locations.bannerTitle}
						</h1>
						<p className="locations-banner__text t-p-lg">
            {locations.bannerDescription}
						</p>
					</div>
				</section>

				<section className="locations-flags">
					<div className="ui container">
						<h2 className="locations-flags__title t-h2-lg">{locations.topLocationTitle}</h2>
						<div className="locations-flags__wrapper">

							{locations.topLocationList.map((flag) => (
								<div key={flag.topLocationContent.locationCountry} className="locations-flags__item">
                  <div className="locations-flags__img">
                    <Link to={flag.topLocationContent.locationLink}> 
                      <ImageObserver src={flag.topLocationContent.locationImage} altString={flag.topLocationContent.locationCountry + ' flag'} /> 
                    </Link>
                  </div> 
                  <Link to={flag.topLocationContent.locationLink}>
                    <div className="locations-flags__info">
                      <p className="locations-flags__country">{flag.topLocationContent.locationCountry}</p>
                      <div className="locations-flags__number t-h3">{flag.topLocationContent.locationIps}</div>
                    </div>
                  </Link>
								</div>
							))}

						</div>
					</div>
				</section>

				<section className="locations-all">
					<div className="ui container">
						<h2 className="locations-all__title t-h2-lg">All Locations</h2>
						<div className="locations-all__wrapper">

							{/* {locationsData.map((item) => {
								var perChunk = Math.ceil(item.countries.length / this.state.countryCol)

								countryMatrix = item.countries.reduce((resultArray, eachItem, index) => {
									const chunkIndex = Math.floor(index / perChunk)

									if (!resultArray[chunkIndex]) {
										resultArray[chunkIndex] = []
									}

									resultArray[chunkIndex].push(eachItem)
									return resultArray
								}, [])

								return ( */}
									<div className="locations-all__region">
										<div className="locations-all__continent t-h2">{locations.asia}</div>
										<div className="locations-all__countries">

											{locations.asiaCounties.map((i) => (
												<div key={i.contentHere.country} className="locations-all__chunk">
														<p>{i.contentHere.country}</p>
												</div>
                      ))} 
										</div>
									</div>

                  <div className="locations-all__region">
										<div className="locations-all__continent t-h2">{locations.africa}</div>
										<div className="locations-all__countries">

											{locations.africaCounties.map((i) => (
												<div key={i.contentHere.country} className="locations-all__chunk">
														<p>{i.contentHere.country}</p>
												</div>
                      ))} 
										</div>
									</div>

                  <div className="locations-all__region">
										<div className="locations-all__continent t-h2">{locations.europe}</div>
										<div className="locations-all__countries">

											{locations.europeCounties.map((i) => (
												<div key={i.contentHere.country} className="locations-all__chunk">
														<p>{i.contentHere.country}</p>
												</div>
                      ))} 
										</div>
									</div>

                  <div className="locations-all__region">
										<div className="locations-all__continent t-h2">{locations.australia}</div>
										<div className="locations-all__countries">

											{locations.australiaCounties.map((i) => (
												<div key={i.contentHere.country} className="locations-all__chunk">
														<p>{i.contentHere.country}</p>
												</div>
                      ))} 
										</div>
									</div>

                  <div className="locations-all__region">
										<div className="locations-all__continent t-h2">{locations.northAmerica}</div>
										<div className="locations-all__countries">

											{locations.northAmericaCounties.map((i) => (
												<div key={i.contentHere.country} className="locations-all__chunk">
														<p>{i.contentHere.country}</p>
												</div>
                      ))} 
										</div>
									</div>

                  <div className="locations-all__region">
										<div className="locations-all__continent t-h2">{locations.southAmerica}</div>
										<div className="locations-all__countries">

											{locations.southAmericaCounties.map((i) => (
												<div key={i.contentHere.country} className="locations-all__chunk">
														<p>{i.contentHere.country}</p>
												</div>
                      ))} 
										</div>
									</div>

                  <div className="locations-all__region">
										<div className="locations-all__continent t-h2">{locations.us}</div>
										<div className="locations-all__countries">

											{locations.USCounties.map((i) => (
												<div key={i.contentHere.country} className="locations-all__chunk">
														<p>{i.contentHere.country}</p>
												</div>
                      ))} 
										</div>
									</div>
								 
						</div>
					</div>
				</section>

				<section className="locations-faq">
					<div className="ui container">
						<h2 className="locations-faq__title t-h2-lg">{locations.faqTitle}</h2>
						<div className="locations-faq__wrapper">
							{locations.faqList.map((item) => (
								<div key={item.contentHere.faqquestion} className="locations-faq__item">
									<div className="locations-faq__question t-h2">{item.contentHere.faqQuestion}</div>
									<p className="locations-faq__answer">{item.contentHere.faqAnswer}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="locations-cta">
					<div className="ui container">
						<div className="locations-cta__wrapper">
							<div className="locations-cta__info">
								<h2 className="locations-cta__title t-h1">
									Start Today with a <br /> Free 3-day trial.
								</h2>
								<div className="locations-cta__steps">
									<div className="locations-cta__step">
										<div className="locations-cta__step-number">1</div>
										<p className="locations-cta__step-text">Enter your email address</p>
									</div>
									<div className="locations-cta__step">
										<div className="locations-cta__step-number">2</div>
										<p className="locations-cta__step-text">Select your Plan</p>
									</div>
									<div className="locations-cta__step">
										<div className="locations-cta__step-number">3</div>
										<p className="locations-cta__step-text">Test For free</p>
									</div>
								</div>
								<div className="locations-cta__form">
									<form action="" onSubmit={this.handleSubmit}>
										<input type="email" placeholder="Enter your email" name="email" value={email} onChange={this.handleChange}/>
										<input type="submit" value="Get Started"/>
									</form>
									<p className="t-p-lg">No credit Card Required</p>
								</div>
							</div>
							<div className="locations-cta__img">
								<ImageObserver src={require('../images/locations_loudspeaker.png')} altString="loudspeaker" />
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</main>
		)
	}
}
export const query = graphql`
  query locations {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`