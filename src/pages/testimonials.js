import React from 'react'

import { Helmet } from 'react-helmet'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import Footer from '../layout/footer'
import testimonialImage from '../images/flag_au.svg';

import cmstestimonials from '../dynamic/testimonials.json'

export default class testimonials extends React.Component {
  
  componentDidMount() {
    window.analytics.page('Testimonials', {
      name: 'Testimonials',
      title: 'Testimonials | LimeProxies',
    });
  }
  
  render() {
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

		return (
			<main className="testimonials">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content="Testimonials | LimeProxies"/>
          <meta name="description" content="Testimonials" />
          <meta name="keywords" content="Testimonials" />
          <link rel="canonical" href={`${siteUrl}testimonials`} />
          <title>Testimonials | LimeProxies</title>
        </Helmet>

        <Header />
        <section className="testimonials__banner">
          <div className="ui container">
            <h1 className="testimonials__banner__title t-h1">Testimonials</h1>
          </div>
        </section>

        <section className="testimonials-grid">
          <div className="ui container custom-container">
            <h2 className="testimonials-grid__title h-feature">From our customers:</h2>

            <div className="testimonials-grid__wrapper">

              {cmstestimonials.testimonialsList.map((item, i) => {
                
                const str = item.name;
                const sliceName = str.substring(0,2).toUpperCase();

                return (
                  <div key={i} className="testimonials-grid__wrapper__boxes">
                  <div className="comment">
                  {item.comment}
                  </div>
                  <div className="owner">
                    <div className="initials" style={ item.image === undefined ? {backgroundImage: 'linear-gradient(45deg,#0694ea,#0694ea 1.24647%,#9cc037 99.5069%,#9cc037'} : {backgroundImage:  'url('+item.image+')'} }>      { item.image === undefined ? sliceName : " " }</div>
                   
                    <div className="name">
                      <span>{item.name}</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>
                )
              })}
             

            </div>
          </div>
        </section>

        <section className="great-success">
            <div className="ui container custom-container">
              <h3 className="great-success__title">{cmstestimonials.sectionTwoTitle}</h3>
              <div className="great-success_wrapper">

                {cmstestimonials.statistics.map((item, i) => (
                  <div key={i} className="great-success_wrapper__box">
                    <h3 className="stats">{item.stats}</h3>
                    <p className="content">{item.description}</p>
                    <ImageObserver src={item.companyLogo.image} altString={item.companyLogo.altText}/> 
                  </div>
                ))}

              </div>
            </div>
        </section>

				<Footer />
			</main>
		)
  }
}


export const query = graphql`
  query testimonials {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`