import React, { Component } from 'react'

import { Helmet } from 'react-helmet'
import SectionStarted from '../layout/section-started'
import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import Footer from '../layout/footer'
import cmscraigslist from '../dynamic/craigslist.json'


export default class ProxiesForcraigslist extends Component {
  render() {
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <main className="it_managers_outer">
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="canonical" href={`${siteUrl}craigslist-proxies`} />
          <title>{cmscraigslist.title} | Limeproxies</title>
        </Helmet>

        <Header/>

        <section className="it_managers_header">
          <div className="ui container">
            <div className="it_managers_header__wrapper">
              <div className="it_managers_header__item it_managers_header__info">
                <h1 className="title t-h1">{cmscraigslist.title}</h1>
                <p>{cmscraigslist.sub_title}</p>
                <div className="it_managers">
                  <a className="btn_start btn btn--wob btn--lg" href="#/">Start now</a>
                  <a className="btn_request btn btn--transparent btn--lg" href="/get-a-demo">Request Demo</a>
                </div>
              </div>
              <div className="it_managers_header__item it_managers_header__pic">
                <ImageObserver src={require("../images/img_it_managers_header.png")} altString="IT managers header" />
              </div>
            </div>
          </div>
        </section>
        <section className="it_managers_features">
          <div className="ui container">
            <div className="it_managers_features__title">
              <h2 className="title t-h2">{cmscraigslist.section_2_title}</h2>
            </div>
            <div className="it_managers_features__text">
              <p>{cmscraigslist.section_2_subtitle}</p>
            </div>
            <div className="it_managers_features__wrapper it_managers_features_wrap">
              <div className="it_managers_features_wrap__item it_managers_features_item">
                <div className="it_managers_features_item__icon">
                  <ImageObserver src={cmscraigslist.content_1_image} altString="Icon" />
                </div>
                <div className="it_managers_features_item__text">
                  <h3 className="title t-h3">{cmscraigslist.content_1_title}</h3>
                  <p>{cmscraigslist.content_1_description}</p>
                </div>
              </div>
              <div className="it_managers_features_wrap__item it_managers_features_item">
                <div className="it_managers_features_item__icon">
                  <ImageObserver src={cmscraigslist.content_2_image} altString="Icon" />
                </div>
                <div className="it_managers_features_item__text">
                  <h3 className="title t-h3">{cmscraigslist.content_2_title}</h3>
                  <p>{cmscraigslist.content_2_description}</p>
                </div>
              </div>
              <div className="it_managers_features_wrap__item it_managers_features_item">
                <div className="it_managers_features_item__icon">
                  <ImageObserver src={cmscraigslist.content_3_image} altString="Icon" />
                </div>
                <div className="it_managers_features_item__text">
                  <h3 className="title t-h3">{cmscraigslist.content_3_title}</h3>
                  <p>{cmscraigslist.content_3_description}</p>
                </div>
              </div>
              <div className="it_managers_features_wrap__item it_managers_features_item">
                <div className="it_managers_features_item__icon">
                  <ImageObserver src={cmscraigslist.content_4_image} altString="Icon" />
                </div>
                <div className="it_managers_features_item__text">
                  <h3 className="title t-h3">{cmscraigslist.content_4_title}</h3>
                  <p>{cmscraigslist.content_4_description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="it_managers_build">
          <div className="ui container">
            <div className="it_managers_build__wrapper it_managers_build_wrap">
              <div className="it_managers_build_wrap__item it_managers_build_item it_managers_build__pic">
                <ImageObserver src={require("../images/img_it_build.jpg")} />
              </div>
              <div className="it_managers_build_wrap__item it_managers_build_item it_managers_build__info">
                <h3 className="title t-h2">{cmscraigslist.section_3_title}</h3>
                <p>{cmscraigslist.section_3_description}</p>

                <h3 className="title list-title t-h4">{cmscraigslist.section_3_subtitle}</h3>
                <ul>
                  <li>
                    <p>{cmscraigslist.section_3_sub_description_1}</p>
                  </li>
                  <li>
                    <p>{cmscraigslist.section_3_sub_description_2}</p>
                  </li>
                  <li>
                    <p>{cmscraigslist.section_3_sub_description_3}</p>
                  </li>
                  <li>
                    <p>{cmscraigslist.section_3_sub_description_4}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="it_managers_connect">
          <div className="it_managers_connect__triangle">
            <ImageObserver src={require("../images/bg_part_connect_1.svg")} />
          </div>
          <div className="it_managers_connect__img">
            <ImageObserver src={require("../images/img_it_connect.png")} alt="IT managers connect" />
          </div>
          <div className="ui container">
            <div className="it_managers_connect__wrapper it_managers_connect_wrap">
              <div className="it_managers_connect_wrap__item">
                <h3 className="title t-h2">{cmscraigslist.section_4_title}</h3>
                <p>{cmscraigslist.section_4_description}</p>

                <h3 className="title list-title t-h4">{cmscraigslist.section_4_subtitle}</h3>

                <ul>
                  <li>
                    <p>{cmscraigslist.section_4_description_1}</p>
                  </li>
                  <li>
                    <p>{cmscraigslist.section_4_description_2}</p>
                  </li>
                  <li>
                    <p>{cmscraigslist.section_4_description_3}</p>
                  </li>
                  <li>
                    <p>{cmscraigslist.section_4_description_4}</p>
                  </li>
                </ul>
                <a href="/get-a-demo" className="btn btn--wob btn--lg">Request Demo</a>
              </div>
            </div>
          </div>
        </section>
        <SectionStarted/>
        <Footer/>
      </main>
    )
  }
}
export const query = graphql`
  query craigslist {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`