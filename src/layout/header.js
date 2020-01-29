import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'gatsby'

import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBars,
  faTimes,
  // faChevronDown,
  faCaretDown 
} from '@fortawesome/free-solid-svg-icons'

const mobileHeaderData = [
  {
    heading: 'Features',
    children: [
      {
        child: 'Why Limeproxies',
        path: '/why-limeproxies'
      },
      {
        child: 'Locations',
        path: '/locations'
      }
    ]
  },
  {
    heading: 'Use Case',
    children: [
      {
        child: 'Rank Tracking',
        path: '/proxy-server-seo'
      },
      {
        child: 'Sales Intelligence',
        path: '/sales-intelligence'
      },
      {
        child: 'Price Tracking',
        path: '/proxy-server-seo'
      },
      {
        child: 'Web Scraping',
        path: '/proxy-server-seo'
      },
      {
        child: 'Ad Verification',
        path: '/ad-verification-proxy-network'
      },
    ]
  },
  {
    heading: 'Pricing',
    path: '/pricing'
  },
  {
    heading: 'Resources',
    children: [
      {
        child: 'Tutorials',
        path: '/resources/tutorials'
      },
      {
        child: 'Blog',
        path: '/blog'
      },
      {
        child: 'API Documentation',
        path: '/api'
      }
    ]
  },
  {
    heading: 'Support',
    children: [
      {
        child: 'Knowledgebase',
        path: 'http://help.limeproxies.com/'
      },
      {
        child: 'Contact Support',
        path: '/contact'
      },
      {
        child: 'Netowrk Status',
        path: '#'
      }
    ]
  },
  {
    heading: 'Get A Demo',
    path: '/get-a-demo'
  }
]
export default class Header extends Component {
  state = {
    useCaseHover: false,
    resourcesHover: false,
    supportHover: false,
    menuShow:false,
    barShow: false,
    featuresHover: false,
    hoverable: false,
    email: ''
  }

  watchForHover = () => {
    if (typeof document !== 'undefined') {
      var hasHoverClass = false;
        
      // var $document = document.getElementsByTagName('body')[0];
      var lastTouchTime = 0;

      let my = this;

      function enableHover() {
        // filter emulated events coming from touch events
        if (new Date() - lastTouchTime < 500) return;
        if (hasHoverClass) return;

        // $document.classList.add('hoverable');
        my.setState({ hoverable: true })
        hasHoverClass = true;
      }

      function disableHover() {
        if (!hasHoverClass) return;

        // $document.classList.remove('hoverable');
        my.setState({ hoverable: false })
        hasHoverClass = false;
      }

      function updateLastTouchTime() {
        lastTouchTime = new Date();
      }

      document.addEventListener('touchstart', updateLastTouchTime, true);
      document.addEventListener('touchstart', disableHover, true);
      document.addEventListener('mousemove', enableHover, true);

      enableHover();
    }
  }

  componentDidMount() {
    this.watchForHover()
  }

  toggleUseCaseDropdown = () => {
    this.setState(state => ({
      useCaseHover: !state.useCaseHover,
      resourcesHover: false,
      supportHover: false,
      featuresHover: false
    }))
  }

  toggleSupportDropdown = () => {
    this.setState(state => ({
      useCaseHover: false,
      resourcesHover: false,
      supportHover:  !state.supportHover,
      featuresHover: false
    }))
  }

  toggleResourcesDropdown = () => {
    this.setState(state => ({
      resourcesHover: !state.resourcesHover,
      useCaseHover: false,
      supportHover: false,
      featuresHover: false
    }))
  }

  toggleFeaturesDropdown = () => {
    this.setState(state => ({
      resourcesHover: false,
      useCaseHover: false,
      supportHover: false,
      featuresHover: !state.featuresHover
    }))
  }

  falsifyAllDropdown = () => {
    this.setState({
      resourcesHover: false,
      useCaseHover: false,
      supportHover: false,
      featuresHover: false
    })
  }

  hideUseCase =() => {
    this.setState({
      useCaseHover: false
    })
  }

  hideSupport = () => {
    this.setState({
      supportHover: false
    })
  }

  hideResources = () => {
    this.setState({
      resourcesHover: false
    })
  }

  hideFeatures = () => {
    this.setState({
      featuresHover: false
    })
  }

  onShowMenu = () => {
    this.setState({
      menuShow: true,
      barShow:true
    })
  }

  onHideMenu = (e) => {
    e.stopPropagation()

    this.setState({
      menuShow: false,
      barShow: false
    })
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;

    // Add your own unique ID here or we will automatically assign an anonymousID
    window.analytics.identify('Email Subscription',{
      color: 'Site color - Blue',
      email,
      location: 'Header Menu',
      text: 'Get started',
      type: 'Button'
    });
  }

  componentDidUpdate() {
    this.state.menuShow ?
      document.getElementsByTagName('body')[0].classList.add('constricted')
      : document.getElementsByTagName('body')[0].classList.remove('constricted');
    // console.log(this.state.menuShow)
  }

  trackSignup = () => {
    window.analytics.track('Sign up for free Clicked',{
      color: 'Site color - Blue',
      type : 'Link',
      text: 'Sign up for free',
      location : 'Mobile Menu' 
    });
  }

  trackSignIn = () => {
    window.analytics.track('Sign in Clicked',{
      color: 'White',
      type : 'Link',
      text: 'Sign In',
      location : 'Header Menu' 
    });
  }

  trackLogin = () => {
    window.analytics.track('Login Clicked',{
      color: 'White',
      type : 'Link',
      text: 'Log In',
      location : 'Mobile Menu' 
    });
  }

  render() {
    const { email } = this.state;
    return (
      <header className="header">
        <div className="header__wrapper header_wrap">
          <div className="header_wrap__left" onMouseLeave={this.falsifyAllDropdown}>
            <div className="header_wrap__logo">
              <Link to="/">
                <img className="logo-orig" src={require("../images/logo.svg")} alt="Logo" />
                <img  className="logo-white" src={require("../images/testominial-logo.png")} alt="Logo" />
              </Link>
            </div>
            <nav className="header_wrap__menu">
              <ul>
                <li className="platform_nav has_children">
                  <div className="platform_nav_link about-style" onMouseEnter={this.state.hoverable ? this.toggleFeaturesDropdown : null} onClick={this.state.hoverable ? null : this.toggleFeaturesDropdown}>
                    Why Limeproxies <FontAwesomeIcon icon={faCaretDown}/>
                  </div>

                  <nav className={classNames('sub_menu', {
                    'show': this.state.featuresHover
                  })} onMouseLeave={this.hideFeatures}>
                    <div>
                      <div className="sub_menu__item"> 
                        <ul>
                          {/* <li><Link to="/why-limeproxies" activeClassName="active">Why Limeproxies</Link></li> **/}
                          <li><Link to="/features" activeClassName="active">Features</Link></li>
                          <li><Link to="/locations" activeClassName="active">Locations</Link></li>
                        </ul>
                      </div>
                      <div className="sub_menu__help">
                        <a href="http://help.limeproxies.com" target="_blank" rel="noopener noreferrer">GET HELP NOW <img src={require("../images/icon_right_arrow_white.svg")} alt="" /></a>
                      </div>
                    </div>
                  </nav>
                </li>
                {/* <li><Link to="/productOne">Features</Link></li> */}
                <li className="platform_nav has_children">
                  <div className="platform_nav_link about-style" onMouseEnter={this.state.hoverable ? this.toggleUseCaseDropdown : null} onClick={this.state.hoverable ? null : this.toggleUseCaseDropdown}>
                    Use Case <FontAwesomeIcon icon={faCaretDown }/>
                  </div>

                  <nav className={classNames('sub_menu ', {
                    'show': this.state.useCaseHover
                  })} onMouseLeave={this.hideUseCase}>
                    <div>
                      <div className="sub_menu__item">
                        <ul>
                          <li><Link to="/proxy-for-seo" activeClassName="active">Rank Tracking</Link></li>
                          <li><Link to="/sales-intelligence" activeClassName="active">Sales Intelligence</Link></li>
                          <li><Link to="/proxy-for-price-tracking" activeClassName="active">Price Tracking</Link></li>
                          <li><Link to="/proxy-for-web-scrapping" activeClassName="active">Web Scrapping</Link></li>
                          <li><Link to="/ad-verification-proxy-network" activeClassName="active">Ad Verification</Link></li>
                        </ul>
                      </div>

                      <div className="sub_menu__help">
                      <a href="http://help.limeproxies.com" target="_blank" rel="noopener noreferrer">GET HELP NOW <img src={require("../images/icon_right_arrow_white.svg")} alt="Icon" /></a>
                      </div>
                    </div>
                  </nav>
                </li>

                <li><Link className="platform_nav_link about-style" activeClassName="active" to="/pricing" onMouseEnter={this.state.hoverable ? this.falsifyAllDropdown : null} onClick={this.state.hoverable ? null : this.falsifyAllDropdown}>Pricing</Link></li>

                <li className="platform_nav has_children">
                  <div className="platform_nav_link about-style" onMouseEnter={this.state.hoverable ? this.toggleResourcesDropdown : null} onClick={this.state.hoverable ? null : this.toggleResourcesDropdown}>
                   Resources <FontAwesomeIcon icon={ faCaretDown }/>
                  </div>

                  <nav className={classNames('sub_menu', {
                  'show': this.state.resourcesHover
                  })} onMouseLeave={this.hideResources}>
                    <div>
                      <div className="sub_menu__item">
                        <ul>
                          <li><Link to="/resources/tutorials" activeClassName="active">Tutorials</Link></li>
                          <li><Link to="/resources/videos" activeClassName="active">Videos</Link></li>
                          <li><Link to="/blog" activeClassName="active">Blog</Link></li>
                          <li><Link to="/api" activeClassName="active">Api documentation</Link></li>
                        </ul>
                      </div>

                      <div className="sub_menu__help">
                        <a href="http://help.limeproxies.com" target="_blank" rel="noopener noreferrer">GET HELP NOW <img src={require("../images/icon_right_arrow_white.svg")} alt="Icon" /></a>
                      </div>
                    </div>
                  </nav>
                </li>

                <li className="platform_nav has_children">
                  <div className="platform_nav_link about-style" onMouseEnter={this.state.hoverable ? this.toggleSupportDropdown : null} onClick={this.state.hoverable ? null : this.toggleSupportDropdown}>
                    Support <FontAwesomeIcon icon={faCaretDown }/>
                  </div>

                  <nav className={classNames('sub_menu', {
                    'show': this.state.supportHover
                    })} onMouseLeave={this.hideSupport}>
                    <div>
                      <div className="sub_menu__item">
                        <ul>
                          <li><a href="http://help.limeproxies.com" target="_blank" rel="noopener noreferrer">Knowledgebase</a></li>
                          <li><Link to="/support" activeClassName="active">Contact support</Link></li>
                          <li><a href="#" target="_blank" rel="noopener noreferrer">Network status</a></li>
                        </ul>
                      </div>

                      <div className="sub_menu__help">
                        <a href="http://help.limeproxies.com" target="_blank" rel="noopener noreferrer">GET HELP NOW <img src={require("../images/icon_right_arrow_white.svg")} alt="Icon" /></a>
                      </div>
                    </div>
                  </nav>
                </li>

                <li><Link className="platform_nav_link about-style" activeClassName="active" to="/get-a-demo" onMouseEnter={this.state.hoverable ? this.falsifyAllDropdown : null} onClick={this.state.hoverable ? null : this.falsifyAllDropdown}>Get A Demo</Link></li>
              </ul>
            </nav>

            <nav className="header_wrap__mobile_menu mobile_menu">
              <div className={classNames('mobile_menu__icon', {'barClose': this.state.barShow})}
                onClick={this.onShowMenu}>
                <FontAwesomeIcon className="bar" icon={faBars}></FontAwesomeIcon>
              </div>

              <div className={classNames('mobile_menu__close', {
              'showClose': this.state.menuShow
              })} onClick={this.onHideMenu}>
                <FontAwesomeIcon icon={faTimes} ></FontAwesomeIcon>
              </div>

              <div className={classNames('mobile_menu_dropdown blue-lime-gradient', {'show': this.state.menuShow})}>
                <div className="mobile_menu_dropdown__wrapper">
                  <div className="mobile_menu_dropdown__inner p-3">
                    { mobileHeaderData.map((item, i) => (
                      <div key={i} className="mobile_menu_group">
                        { item.children ? 
                          <div>
                            <h3 className="m-0">{item.heading}</h3>
                            <ul>
                              {item.children.map((subitem, j) => (
                                <li key={j}>
                                  <Link to={subitem.path}>{subitem.child}</Link>
                                </li>
                              ))}
                            </ul>
                          </div> 
                          : <h3 className="m-0">
                            <Link to={item.path}>{item.heading}</Link>
                          </h3>
                        }
                      </div>
                    ))}

                    <Link to="/" className="btn btn-white mb-2" onClick={this.trackLogin}>Login</Link>
                    <Link to="/" className="btn btn-blue" onClick={this.trackSignup}>Sign Up For Free</Link>
                    {/* <ul>
                      <li>
                        <Link to="/" onClick={this.toggleFeaturesDropdown}>
                          Features <FontAwesomeIcon icon={faChevronDown}/>
                        </Link>
                        <ul className={classNames('sub_menu', {'show': this.state.featuresHover})}
                          onClick={this.hideUseCase}>
                          <li><Link to="/why-limeproxies" onClick={this.onHideMenu}>Why Limeproxies</Link></li>
                          <li><Link to="/locations" onClick={this.onHideMenu}>Locations</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/" onClick={this.toggleUseCaseDropdown}>
                          Use Case <FontAwesomeIcon icon={faChevronDown} />
                        </Link>
                        <ul className={classNames('sub_menu', {'show': this.state.useCaseHover})}
                          onClick={this.hideUseCase}>
                          <li><Link to="/proxy-server-seo" onClick={this.onHideMenu}>Rank Tracking</Link></li>
                          <li><Link to="/sales-intelligence" onClick={this.onHideMenu}>Sales Intelligence</Link></li>
                          <li><Link to="/proxy-server-seo" onClick={this.onHideMenu}>Price Tracking</Link></li>
                          <li><Link to="/prox-server-seo" onClick={this.onHideMenu}>Web Scrapping</Link></li>
                          <li><Link to="/ad-verification-proxy-network" onClick={this.onHideMenu}>Ad Verification</Link></li>
                        </ul>
                      </li>
                      <li><Link to="/pricing" onClick={this.onHideMenu}>Pricing</Link></li>
                      <li>
                        <Link to="/" onClick={this.toggleResourcesDropdown}>
                          Resources <FontAwesomeIcon className="res-down" icon={faChevronDown}/>
                        </Link>
                        <ul className={classNames('sub_menu', {'show': this.state.resourcesHover})}
                          onClick={this.hideResources}>
                          <li><Link to="/" onClick={this.onHideMenu}>Tutorials</Link></li>
                          <li><Link to="/blog" onClick={this.onHideMenu}>Blog</Link></li>
                          <li><Link to="/" onClick={this.onHideMenu}>Api documentation</Link></li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/" onClick={this.toggleSupportDropdown}>
                          Support <FontAwesomeIcon className="res-down" icon={faChevronDown} />
                        </Link>
                        <ul className={classNames('sub_menu', {'show': this.state.supportHover})}
                          onClick={this.hideSupport}>
                          <li><a href="http://help.limeproxies.com" target="_blank" rel="noopener noreferrer" onClick={this.onHideMenu}>Knowledgebase</a></li>
                          <li><Link to="/contact" onClick={this.onHideMenu}>Contact support</Link></li>
                          <li><a href="//status.limeproxies.com" target="_blank" rel="noopener noreferrer" onClick={this.onHideMenu}>Network status</a></li>
                        </ul>
                      </li>
                      <li><Link to="/get-a-demo" onClick={this.onHideMenu}>Get A Demo</Link></li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </nav>
          </div>

          <div className="header_wrap__right">
            <form action="" onSubmit={this.handleSubmit}>
              <input className="btn-con-style" type="email" name="email" value={email} placeholder="Enter your email" onChange={this.handleChange}/>
              <input className="btn-con-get-style" type="submit" value="Get Started" />
            </form>
            <Link to="/" className="btn_white btn-about" onClick={this.trackSignIn}>Sign in</Link>
          </div>
        </div>
      </header>
    )
  }
}