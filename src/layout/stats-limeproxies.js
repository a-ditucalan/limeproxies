import React, { Component } from 'react'
import stats from '../dynamic/statsLimeproxies.json'

const statsData = [
  {
    number: '24/7',
    title: 'Customer Support',
    text: 'We provide premium support through our innovative Campfire Support system that sets us apart from other providers.'
  },
  {
    number: '300+',
    title: 'Global Subnets',
    text: 'We provide Proxies from multi mixed subnets from nationwide locations. We have more than 300 subnets.'
  },
  {
    number: '1000',
    title: '1 GBPS Speed',
    text: 'Unmatched blistering speed of 1000 Mbps/sec. Works Great for high performance, multithreaded softwares.',
  },
  {
    number: '40+',
    title: '40+ Locations',
    text: 'Choice of several international and US geo locations, with high speed and 24/7 support 365 days a year.'
  }
]


export default class Stats extends Component {
  render() {
    return (
      <section className="why-stats">
        <div className="ui container">
          <div className="why-stats__wrapper">
            {stats.statsContent.map((item) => (
              <div key={item.contentsHere.statsTitle} className="why-stats__item">
                <h2 className="gradient">{item.contentsHere.statsCount}</h2>
                <h3 className="why-stats__title t-h3">{item.contentsHere.statsTitle}</h3>
                <p className="why-stats__text">{item.contentsHere.statsDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
}