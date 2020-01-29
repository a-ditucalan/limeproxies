import React, { Component } from "react"
import Swiper from 'react-id-swiper';
import { Link } from 'gatsby'

import cmstestimonials from '../dynamic/testimonials.json'
import anon from '../images/testimonial-anon.svg'

const dataLove = [
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Robert',
    title: 'Awesome',
    text: 'Awsome support team with fast proxies.'
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Akshay Hk',
    title: 'Fantastic proxies ..have tried several...',
    text: 'Fantastic proxies ..have tried several providers but limeproxies support is second to none..'
  },
  {
    img: require('../images/avatar-nhat-tran.png'),
    name: 'Nhat Tran',
    title: 'so good support and hight respond.',
    text: 'so good support and hight respond.'
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Christopher Avery, Austin, TX',
    title: 'Great support from LimeProxies',
    text: "I'm a novice at using a Proxy service. LimeProxies has been fabulous at getting me up and running. Excellent support."
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Anime Kages',
    title: 'Fast and good communication',
    text: 'Fast and good communication. Any problems  or questions will be answered quickly. They are very helpful and I can recommend them.'
  },
  {
    img: require('../images/avatar-mdzakir-hossain.png'),
    name: 'Md.Zakir Hossain',
    title: 'Excellent',
    text: 'Its a Nice Supported company.'
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Mario Ortega',
    title: 'Excellent',
    text: 'Excellent attention'
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'David Duque',
    title: 'Limeproxies really knows about customer service',
    text: "Limeproxies support service is amazing. I purchased 2 proxies for a specific use and they helped me out for hours..."
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Aleera',
    title: 'Amazing customer support',
    text: "Amazing customer support and great products."
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Your Step Every Inch',
    title: 'They do it well',
    text: "They do it well, their customer service does the job well.."
  },
  {
    img: require('../images/avatar-will-cx4.png'),
    name: 'Wii Cx4',
    title: 'I would just like to say …',
    text: "I would just like to say \"Limeproxies.com\" really does go up and above to please their customers. They have been great!. Their customer service is A++!"
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Christo',
    title: 'Good service with very good fast support',
    text: "Good service with very good fast support"
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Pete',
    title: 'Great services',
    text: "Great services, Quick communication and high quality proxies."
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Donna',
    title: 'Service works as expected',
    text: "Service works as expected. Decent customer support. No problems."
  },
  {
    img: require('../images/testimonial-anon.svg'),
    name: 'Nicolas',
    title: 'Best service I had. They will answer you',
    text: "Best service i had.they will answer you very fast. Very happy with the support"
  },
]

export default class SectionLove extends Component {
  render() {
    let params = {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      },
      breakpoints: {
        991: {
          slidesPerGroup: 2,
          slidesPerView: 2
        },
        767: {
          slidesPerGroup: 1,
          slidesPerView: 1
        }
      }
    }

    return (
      <section className="home_love">
        <div className="ui container pos-relative">
          <div className="home_love__title">
            <h2 className="title t-h2">People love Limeproxies</h2>
          </div>
          <div className="home_love__wrapper home_love_wrap">
            <Swiper {...params}>
              {cmstestimonials.testimonialsList.map((item, i) => {
                let comment = item.comment;
                let slicedComment = comment.slice(0, 100)+'...';

                return (
                <Link key={i} to={'/testimonials'} className="testimonial-link">
                  <div className="swiper-holder">
                    <div className="home_love_wrap__item home_love_item">
                      <div className="home_love_item__top home_love_top">
                        <div className="home_love_top__avatar" style={item.image === undefined ? {backgroundImage:  'url('+anon+')'} : {backgroundImage:  'url('+item.image+')'} }>
                        </div>
                        <div className="home_love_top__info">
                          <h3 className="title">{item.name}</h3>
                          <ul>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon" /></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon" /></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon" /></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon" /></li>
                            <li><img src={require("../images/icon_star.svg")} alt="Icon" /></li>
                          </ul>
                        </div>
                      </div>
                      <div className="home_love_item__title">
                        <h3 className="title">{item.shortCaption}</h3>
                      </div>
                      <div className="home_love_item__text">
                        <p>{slicedComment}</p>
                      </div>
                      <div className="home_love_item__logo">
                        <img src={require("../images/logo_rev.svg")} alt="Logo" />
                      </div>
                    </div>
                  </div>
                </Link>
                )
              })}
            </Swiper>
          </div>
        </div>
      </section>
    )
  }
}