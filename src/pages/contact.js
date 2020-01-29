import React, { Component } from 'react'
import { Link } from 'gatsby'

// import { Dropdown } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronRight,faPhone } from '@fortawesome/free-solid-svg-icons'

import ImageObserver from '../layout/observer-image-target'
import Header from '../layout/header'
import SectionSales from '../layout/contact-sales'
import SectionHelpCentre from '../layout/contact-help-centre'
import SectionGeneralInquiries from '../layout/contact-general-inquiries'
import SectionStarted from '../layout/section-started'
import Footer from '../layout/footer'

import contact from '../dynamic/contact.json'

const contactTabsData = [
  {
    icon: require("../images/icon_contacts_phone.svg"),
    title: 'Sales',
    text: 'Learn how product analytics can help you.',
    cta: 'Contact Sales',
  },
  {
    icon: require("../images/chatsupport.png"),
    title: 'FAQ',
    text: 'Get help with your account or technical questions',
    cta: 'Visit the FAQ page',
  },
  {
    icon: require("../images/icon_contacts_telegram.svg"),
    title: 'Help & Support',
    text: 'Have a question about something else?',
    cta: 'Contact Us',
  }
]

export default class Contact extends Component {
  state = {
    // contactOptions: [
    //   {
    //     text: "I am thinking about signing up for Limeproxies",
    //     value:"I am thinking about signing up for Limeproxies",
    //     key: "I am thinking about signing up for Limeproxies"
    //   },
    //   {
    //     text: "I can't login to my account",
    //     value:"I can't login to my account",
    //     key:"I can't login to my account"
    //   },
    //   {
    //     text:"I already have an account and I need help with it",
    //     value:"I already have an account and I need help with it",
    //     key:"I already have an account and I need help with it"
    //   }
    // ],
    // contact: ''
    activeTab: -1
  }

  // onDropdownChange = (e, {name,value}) => { this.setState({ [name]: value }) }
  componentDidMount() {
    window.analytics.page('Reliable and Fast VPN Proxy Server | Contact LimeProxies', {
      name: 'Contact',
      title: "Reliable and Fast VPN Proxy Server | Contact LimeProxies",
    });
  }

  activeTabChange = (i) => { this.setState ({ activeTab: i }) }

  render() {
    // const  {contactOptions} = this.state
    const data = this.props.data;
    const siteUrl = data.site.siteMetadata.siteUrl

    return (
      <main className="contact">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="title" content={contact.meta_title}/>
          <meta name="description" content={contact.description} />
          <meta name="keywords" content={contact.yoast_keyword} />
          <link rel="canonical" href={`${siteUrl}contact`} />
          <title>{contact.meta_title}</title>
        </Helmet>

        <Header/>

        {/* <section className="contacts_header" style={{backgroundImage: 'url('+ Bg +')'}}>
          <div className="ui container">
            <div className="contacts_header__title">
              <h3 className="title">How Can we Help?</h3>
            </div>
            <div className="ui fluid selection dropdown dropdown-box">
              <Dropdown placeholder='Choose an option...'
                fluid
                selection
                name="contact"
                value={this.state.contact}
                onChange={this.onDropdownChange}
                options={contactOptions} />
              <img className="chevron-right" src={require('../images/chevron-right.png')} alt="img"/>
            </div>
          </div>
        </section> */}

        <section className="contacts_touch">
          <div className="ui container">
            <div className="contacts_touch__title">
              <h1 className="title t-h1">{contact.mainTitle}</h1>
            </div>
            <div className="contacts_touch__text">
              <p className="t-p-lg">{contact.pageDescription}</p>
            </div>
            <div className="contacts_touch__wrapper contacts_touch_wrap">

              {contact.contactCard.map((item, i) => (
                <div key={item.cardContent.cardTitle} className="contacts_touch_wrap__item contacts_touch_item">
                  <div className="contacts_touch_item__icon">
                    <ImageObserver src={item.cardContent.cardLogo} />
                  </div>
                  <div className="contacts_touch_item__title">
                    <h3 className="title t-h3">{item.cardContent.cardTitle}</h3>
                  </div>
                  <div className="contacts_touch_item__text">
                    <p>{item.cardContent.cardDescription}</p>
                  </div>
                  { 
                    i === 0 ? 
                    <div className="contacts_touch_item__btn" onClick={() => this.activeTabChange(i)}>
                      <div className="t-h3">{item.cardContent.cardLabel}</div>
                    </div> : null
                  }
                  { 
                    i === 1 ? 
                    <Link to="/faq" className="contacts_touch_item__btn">
                      <div className="t-h3">{item.cardContent.cardLabel}</div>
                    </Link> : null
                  }
                  { 
                    i === 2 ? 
                    <div className="contacts_touch_item__btn" onClick={() => this.activeTabChange(i)}>
                      <div className="t-h3">{item.cardContent.cardLabel}</div>
                    </div> : null
                  }
              </div>
              ))}

            </div>
          </div>
        </section>

        { this.state.activeTab !== -1 ?
          this.state.activeTab === 0 ? <SectionSales /> :
          this.state.activeTab === 1 ? <SectionHelpCentre /> :
          this.state.activeTab === 2 ? <SectionGeneralInquiries /> : null
          : <div className="contacts_main_content">
              <section className="contacts_find">
                <div className="ui container">
                  <div className="contacts_find__title">
                    <h2 className="title t-h2">{contact.findUsTitle}</h2>
                  </div>
                </div>
                <div className="contacts_find__wrapper contacts_find_wrap">
                  <div className="ui container">
                    <div className="contacts_find_wrap__img">
                      <ImageObserver src={require("../images/img_contacts_find.jpg")} altString="find contacts"/>
                    </div>
                    <div className="contacts_find_wrap__text">
                      <h3 className="title t-h2">Headquarters</h3>
                      <ul>
                        <li>
                          <ImageObserver src={require("../images/icon_contacts_place.svg")} altString="Icon"/>
                          <p className="contact-address">{contact.address}</p>
                        </li>
                        <li>
                          <ImageObserver src={require("../images/icon_contacts_message.svg")} altString="Icon"/>
                          <p><a className="contact-email" href={`mailto:${contact.email}`}>{contact.email}</a></p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="contacts_else ui container">
                <div className="custom-container">
                  <div className="contacts_else__title">
                    <h2 className="title t-h2">{contact.lookingForTitle}</h2>
                  </div>
                  <div className="contacts_else__wrapper contacts_else_wrap">

                    <div className="contacts_else_wrap__item contacts_else_item">
                      <h3 className="title t-h3">{contact.firstBoxTitle}</h3>
                      <p>{contact.firstBoxContent}</p>
                      <a className="t-h3" href={contact.firstBoxLink}>Learn More</a>
                    </div>

                    <div className="contacts_else_wrap__item contacts_else_item">
                      <h3 className="title t-h3">{contact.SecondBoxTitle}</h3>
                      <p>{contact.SecondBoxContent}</p>
                      <a className="t-h3" href={contact.SecondBoxLink}>Learn More</a>
                    </div>

                  </div>
                </div>
              </section>

            </div>
        }

        <SectionStarted />
        <Footer />
      </main>
    );
  }
}
export const query = graphql`
  query contact {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`