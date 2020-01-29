import React, { Component } from 'react'
import { Link } from 'gatsby'

import ImageObserver from '../layout/observer-image-target'
import globalCoverage from '../dynamic/globalCoverage.json'

const coverageData = [
  {
    flag: require('../images/flag_au.svg'),
    country: 'Australia',
    ips: '3,589,765 IPs'
  },
  {
    flag: require('../images/flag_us.svg'),
    country: 'United States',
    ips: '3,589,765 IPs'
  },
  {
    flag: require('../images/flag_ca.svg'),
    country: 'Canada',
    ips: '3,589,765 IPs'
  },
  {
    flag: require('../images/flag_ie.svg'),
    country: 'Ireland',
    ips: '3,589,765 IPs'
  },
  {
    flag: require('../images/flag_es.svg'),
    country: 'Spain',
    ips: '3,589,765 IPs'
  },
  {
    flag: require('../images/flag_dk.svg'),
    country: 'Denmark',
    ips: '3,589,765 IPs'
  },
]


export default class SectionCoverage extends Component {
  render() {
    return (
      <section className="why-coverage">
        <div className="ui container">
          <div className="why-coverage__wrapper">
            <div className="why-coverage__pic">
              <ImageObserver src={require('../images/img_features_2.jpg')} altString="" />
            </div>
            <div className="why-coverage__info">
              <h2 className="t-h2">{globalCoverage.gcTitle}</h2>
              <p>{globalCoverage.gcDescription}</p>
              <div className="why-coverage__countries">
                { globalCoverage.gcContent.map((item) => (
                  <div key={item.contentsHere.featureTitle} className="why-coverage__item">
                    <div className="why-coverage__flag">
                      <Link to={item.contentsHere.featureLink}><ImageObserver src={item.contentsHere.featureIcon} altString="" />  </Link>
                    </div>
                    <div className="why-coverage__details">
                    <Link to={item.contentsHere.featureLink}> <p className="why-coverage__country">{item.contentsHere.featureTitle}</p>  </Link>
                      <p className="why-coverage__ips">{item.contentsHere.featureDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="t-p-lg t-center t-black">Click here for <Link to="/locations" className="t-blue">detailed locations</Link></p>
        </div>
      </section>
    )
  }
}