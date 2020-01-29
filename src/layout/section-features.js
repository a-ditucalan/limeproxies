import React, { Component } from "react"

import ImageObserver from '../layout/observer-image-target'
import cmsSectionFeatures from '../dynamic/sectionFeatures.json'

const featuresData = [
  {
    img: require("../images/icon_usecases_feature_1.svg"),
    title: 'Dedicated IPS',
    text: `Over 2Million clean residential IPs. Our IPs are never detected as proxies. This combination of proxy masking & residential IPs gives us the ability to stay undetectable.`
  },
  {
    img: require("../images/icon_usecases_feature_2.svg"),
    title: 'Simultaneous Usage',
    text: `Our Enterprise customers get quick and friendly premium support from a designated customer success manager via phone/ Email or Skype.`
  },
  {
    img: require("../images/icon_usecases_feature_3.svg"),
    title: 'Highly Anonymous',
    text: `Our API has copy paste code examples in every common programming languages.`
  },
  {
    img: require("../images/icon_usecases_feature_4.svg"),
    title: 'Multiple Locations',
    text: `Get full access to our pool of IPs without limitations and plans. You are unlimited! With the number of connections, threads and Countries.`
  },
  {
    img: require("../images/Asset 5.png"),
    title: '24/7 Support',
    text: `130 Geo locations including: US, Canada, Germany, Mexico, Thailand, Brazil, Argentina, Colombia and more.`
  },
  {
    img: require("../images/icon_usecases_feature_8.svg"),
    title: '300+ Subnets',
    text: `Detailed usage statistics for your account will allow you to monitor and optimize your data collection process.`
  },
  {
    img: require("../images/highPerformance.png"),
    title: 'High Performance',
    text: `Detailed usage statistics for your account will allow you to monitor and optimize your data collection process.`
  },
  {
    img: require("../images/Anytime.png"),
    title: 'Anytime IP Refresh',
    text: `Detailed usage statistics for your account will allow you to monitor and optimize your data collection process.`
  },
  {
    img: require("../images/automated.png"),
    title: 'Automated Dash',
    text: `Detailed usage statistics for your account will allow you to monitor and optimize your data collection process.`
  },
]
export default class SectionFeatures extends Component {
  render() {
    return (
    <section className="usecases_features">
      <div className="ui container">
        <div className="usecases_features__wrapper usecases_features_wrap">
        {cmsSectionFeatures.ucfeaturesContent.map((item) => (
            <div key={item.contentsHere.featureTitle} className="usecases_features_wrap__item usecases_features_item">
              <ImageObserver src={item.contentsHere.featureIcon} altString="Icon" />
              <h3 className="title t-h2">{item.contentsHere.featureTitle}</h3>
              <p>{item.contentsHere.featureDescription}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    )
  }
}

