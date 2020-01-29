import React, { Component } from 'react'

//function encode(data) {
//  return Object.keys(data)
//    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//    .join("&");
//}

export default class buyNowPopup extends Component {
  state = {
    activeMod: false,
    fields : {
      name: "",
      email: "",
      number: "",
      requirements: "",
      bandwidth: ""
    }
  }

  //refMailto = React.createRef()

  timeouts = []

  handleFormSubmit = (e) => {

   // console.log(this.state)

   // e.preventDefault();
   // const form = e.target;
   // fetch("/", {
   //   method: "POST",
   //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
   //   body: encode({
   //     "form-name": form.getAttribute("name"),
   //     ...this.state.fields
   //   })
   // })
   //   .then(() => alert('Thank you for contacting LimeProxies.  We will revert back within 24 hours '))
   //  .catch(error => alert(error));
   //this.setState({
   //   fields : {
   //     name: "",
   //     email: "",
   //    number: "",
   //     requirements: "",
   //     bandwidth: ""
   //   }
   // });
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact-pricing", ...this.state })
    // })
    //   .then(() => {
    //     alert("Thank you for getting in touch! We'll get back to you soon")

     // })
    //   .catch(error => alert(error));
    //   e.preventDefault();

    // this.setState({
    //   fields : {
    //     name: "",
    //     email: "",
    //     number: "",
    //     requirements: "",
    //     bandwidth: ""
    //   }
    // })
    // const Form = this.state;

    // window.analytics.identify('Contact Sales Form',{
    // type: 'Form',
    //  Form
    //});
  }

  clearTimeouts = () => { this.timeouts.forEach(clearTimeout) }

  buttonPressed = (newActive) => {
    this.clearTimeouts()

    if (this.state.activeMod === newActive) {
      this.setState({ activeMod: -1 })
    } else {
      this.setState({ activeMod: newActive })
      this.timeouts.push(setTimeout(() => {
        this.setState({ activeMod: -1 })
      }, 5000))
    }    
  };

  handleChange = (e) => {
    let fields = this.state.fields
    fields[e.target.name] = e.target.value 
    this.setState({ fields })
  }



  render() {
    console.log(this.props)
    const {
      activeMod
    } = this.state

    return (
      <div className="pricing-popup-container">
        <section className="pricing_header__box pricing_header_box pricing_header__form">
          <div className="pricing_header_box__top pricing_header_box_top">
            <div className="pricing_header_box_top__text">
              <h2 className="title t-h2">
                {this.props.count} Proxies
                <span className="t-h1">${this.props.finalPrice}/mo</span>
              </h2>
            </div>
            <div className="pricing_header_box_top__icon">
              <img className="windmill" src={require("../images/windmill.gif")} alt="windmill"/>
            </div>
          </div>
          <div className="pricing_header_box__wrapper pricing_header_box_wrap">

            <div className="pricing_header_box_wrap__form">
              <form action="#">
              <input type="hidden" name="bot-field" />
              <div> 
                <label htmlFor="name">
                  <p>Name *</p>
                  <input type="text" name="name" id="name" required />
                </label>
                <label htmlFor="email">
                  <p>Email *</p>
                  <input type="text" name="email" id="email" required />
                </label>
                <label htmlFor="number">
                  <p>Password *</p>
                  <input type="password" name="password" id="password" required />
                </label>
                <input type="submit" value="Buy now" className="btn btn--wob btn--lg"/>
                </div>
              </form>
              
            </div>
            <div className="pricing_header_box_wrap__list custome">
              <ul>
                <li>
                  <span className="list-item">
                    <img src={require("../images/icon_plus.svg")} alt="Icon" onClick={() => this.buttonPressed(1)}/>
                    Virgin IPs
                    <div className={activeMod === 1 ? "text_modal active-mod" : "text_modal"}>
                      <h4 className="title">Virgin IPs</h4>
                      <p>The IP's which are not used.</p>
                    </div>
                  </span>
                </li>
                <li><span className="list-item">50+ concurrent threads</span></li>
                <li><span className="list-item">1 Gbps Blistering Speed</span></li>
                <li>
                  <span className="list-item">
                    <img src={require("../images/icon_plus.svg")} alt="Icon" onClick={() => this.buttonPressed(2)}/>
                    1 Locations Covered
                    <div className={activeMod === 2 ? "text_modal active-mod" : "text_modal"}>
                      <h4 className="title">1 Locations Covered</h4>
                      <p>It is IP location Used for Proxy</p>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="list-item">
                    <img src={require("../images/icon_plus.svg")} alt="Icon" onClick={() => this.buttonPressed(3)}/>
                    1 Subnet covered
                    <div className={activeMod === 3 ? "text_modal active-mod" : "text_modal"}>
                      <h4 className="title">1 Subnet covered</h4>
                      <p>Subnet is a logical subdivision of an IP network
We provide multiple subnets for a single location.</p>
                    </div>
                  </span>
                </li>
                <li>
                  <span className="list-item">
                    <img src={require("../images/icon_plus.svg")} alt="Icon" onClick={() => this.buttonPressed(4)}/>
                    Multiple IP Class
                    <div className={activeMod === 4 ? "text_modal active-mod" : "text_modal"}>
                      <h4 className="title">Multiple IP Class</h4>
                      <p>From All IP Classes - A, B, C, D</p>
                    </div>
                  </span>
                </li>
                <li><span className="list-item">Reliable 24/7 Service</span></li>
              </ul>
              <p>We provide plans for all sizes and needs*</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}