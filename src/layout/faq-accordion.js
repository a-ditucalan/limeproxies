import React, { Component } from 'react'
// import { Link } from 'gatsby'

import { Accordion } from 'semantic-ui-react'

import ImageObserver from '../layout/observer-image-target'

export default class FAQAccordion extends Component {
  state = {
    activeIndex: -1,
  }

	handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <div className="ui container px-3 px-lg-0">
        <div className="pricing_faq__list prising_faq_list">
          <Accordion>
            <div className="prising_faq_list__item prising_faq_item">
              <Accordion.Title active={activeIndex === 0}
                className="title"
                index={0}
                onClick={this.handleClick}>
                <ImageObserver src={require("../images/icon_faq_open.svg")} altString="Icon"/>
                How many concurrent connections can be used?
              </Accordion.Title>

              {/* <Transition visible={visibleOne} animation='drop' duration={500}> */}
                <Accordion.Content active={activeIndex === 0}>
                  <p>By default we allow up to 100 concurrent threads. This limit can be increased upon request.</p>
                </Accordion.Content>
              {/* </Transition> */}
            </div>

            <div className="prising_faq_list__item prising_faq_item">
              <Accordion.Title active={activeIndex === 1}
                index={1}
                onClick={this.handleClick}>
                <ImageObserver src={require("../images/icon_faq_open.svg")} altString="Icon"/>
                What type of authentication is provided?
              </Accordion.Title>

              {/* <Transition visible={visibleTwo} animation='drop' duration={500}> */}
                <Accordion.Content active={activeIndex === 1}>
                <p>By default proxies are authenticated by your IP. Maximum of IPs will be allowed. On request we can also authenticate by username/password.</p>
                </Accordion.Content>
              {/* </Transition> */}
            </div>

            <div className="prising_faq_list__item prising_faq_item">
              <Accordion.Title active={activeIndex === 2}
                index={2}
                onClick={this.handleClick}>
                <ImageObserver src={require("../images/icon_faq_open.svg")} altString="Icon"/>
                Can I test a proxy before purchasing?
              </Accordion.Title>

              {/* <Transition visible={visibleThree} animation='drop' duration={500}> */}
                <Accordion.Content active={activeIndex === 2}>
                <p>Sure. Please signup here for a free test proxy. You may also contact support to request a test proxy.</p>
                </Accordion.Content>
              {/* </Transition> */}
            </div>

            <div className="prising_faq_list__item prising_faq_item">
              <Accordion.Title active={activeIndex === 3}
                index={3}
                onClick={this.handleClick}>
                <ImageObserver src={require("../images/icon_faq_open.svg")} altString="Icon"/>
                Are there any service restrictions?
              </Accordion.Title>

              {/* <Transition visible={visibleFour} animation='drop' duration={500}> */}
                <Accordion.Content active={activeIndex === 3}>
                <p>Yes. Proxies cannot be used for e-mailing, spam, abuse, accessing e-commerce sites such paypal, ebay and access to mailing sites will be blocked. Scrapebox for Spam, xRumer and/or any forum commenting software usage is not allowed.
</p>
                </Accordion.Content>
              {/* </Transition> */}
            </div>
          </Accordion>

          <Accordion>
            <div className="prising_faq_list__item prising_faq_item">
              <Accordion.Title active={activeIndex === 4}
                index={4}
                onClick={this.handleClick}>
                <ImageObserver src={require("../images/icon_faq_open.svg")} altString="Icon"/>
                What's the difference between premium and private proxies?
              </Accordion.Title>

              {/* <Transition visible={visibleFive} animation='drop' duration={500}> */}
                <Accordion.Content active={activeIndex === 4}>
                <p>Premium Proxies have 1gbps dedicated bandwidth speed and virgin IPs which are never before used. Private Proxies have 100 mbps bandwidth and uses recycled IPs.</p>
                </Accordion.Content>
              {/* </Transition> */}
            </div>

            <div className="prising_faq_list__item prising_faq_item">
              <Accordion.Title active={activeIndex === 5}
                index={5}
                onClick={this.handleClick}>
                <ImageObserver src={require("../images/icon_faq_open.svg")} altString="Icon"/>
                What is your refund policy?
              </Accordion.Title>

              {/* <Transition visible={visibleSix} animation='drop' duration={500}> */}
                <Accordion.Content active={activeIndex === 5}>
                <p>LimeProxies believes in complete customer satisfaction. If you are not satisfied with the proxies, we offer a full money back if requested within 3 days. Please read our refund policy for full details.</p>
                </Accordion.Content>
              {/* </Transition> */}
            </div>

            <div className="prising_faq_list__item prising_faq_item">
              <Accordion.Title active={activeIndex === 6}
                index={6}
                onClick={this.handleClick}>
                <ImageObserver src={require("../images/icon_faq_open.svg")} altString="Icon"/>
                Is there any Bandwidth limitation?
              </Accordion.Title>

              {/* <Transition visible={visibleSix} animation='drop' duration={500}> */}
                <Accordion.Content active={activeIndex === 6}>
                <p>We provide a fair usage policy of up to 500GB; however we can increase this on request.
                The Bandwidth limit is per account and not per proxy.</p>
                </Accordion.Content>
              {/* </Transition> */}
            </div>

            <div className="prising_faq_list__item prising_faq_item">
              <Accordion.Title active={activeIndex === 7}
                index={7}
                onClick={this.handleClick}>
                <ImageObserver src={require("../images/icon_faq_open.svg")} altString="Icon"/>
                How often can the proxies be refreshed?
              </Accordion.Title>

              {/* <Transition visible={visibleSix} animation='drop' duration={500}> */}
                <Accordion.Content active={activeIndex === 7}>
                <p>You are entitled to one free IP refresh per month.
                If you require an IP refresh, please contact support here or get in touch via live chat available on https://www.limeproxies.com/</p>
                </Accordion.Content>
              {/* </Transition> */}
            </div>
            
          </Accordion>
        </div>
        <div className="pricing_faq__btn">
          <a href="http://help.limeproxies.com" target="_blank" rel="noopener noreferrer">
            Show More
            <ImageObserver src={require("../images/icon_arrow_get.svg")} altString="Icon"/>
          </a>
        </div>
      </div>
    )
  }
}