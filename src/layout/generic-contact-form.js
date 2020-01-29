import React, { Component } from 'react'
import { navigateTo } from "gatsby-link";
import { Input, TextArea } from 'semantic-ui-react'
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigateTo(form.getAttribute("action")))
      .catch(error => alert(error));
  };
  render () {
    const thanks = '/contact'
    return (
      <div>
      <form className="contact-form" name="contact-form-new" action="/thankyou/" method="post" data-netlify="true" data-netlify-honeypot="bot-field"    onSubmit={this.handleSubmit}>
          <input type="hidden" name="bot-field" />
        <div className="contact-form__holder">
          <div className="ui input input--half">
             <input  name="fname"  required  type="text" placeholder="First name *" onChange={this.handleChange}/>
          </div>
          <div className="ui input input--half">
             <input  name="lname"  required type="text" placeholder="Last name *" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="contact-form__holder">
        <div className="ui input input--half">
             <input  name="company"  type="text" placeholder="Company name" onChange={this.handleChange} />
          </div>
          <div className="ui input input--half">
             <input name="email" required  type="email" placeholder="Email *" onChange={this.handleChange} />
          </div>
        </div>
        <div className="contact-form__holder">
           <div className="ui input input--full">
             <input name="requirements"type="email" type="text" placeholder="Requirements" onChange={this.handleChange}  />
          </div>
        </div>
        <div className="contact-form__holder">
          <textarea name="message" required  className="input--full" placeholder="Message *"  onChange={this.handleChange}></textarea>
        </div>
        <input type="submit" className="btn btn--bow btn--lg btn--full-mobile" value="Get in touch" />
      </form>
      </div>
    )
  }
}
