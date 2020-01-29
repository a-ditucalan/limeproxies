import React,{ Component }  from 'react';
import Link from 'gatsby-link';
import { Helmet } from 'react-helmet'
import Header from '../layout/header'
import Footer from '../layout/footer'

 class ThankYou extends Component {

  render() {
    return (
  <main className="thanks">
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="Thank you - Limeproxies  powers subscriptions for businesses of all sizes. Powering subscriptions for 7000+ companies. Signup Now for Free!" />
      <meta name="keywords" content="proxy service" />


      <title> Thank you | Powers Subscriptions For Businesses | Limeproxies </title>
    </Helmet>
    <Header/>
    <div className="thanks-wrapper">
      <div className="card">
          <div className="">
            <h1>Thankyou!</h1>
          </div>
          <div className="body">
            <p>Your form submission has been received.</p>
            <p>
              <Link id="back-link" to="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                  <path fill="#00ad9f" d="M11.9998836,4.09370803 L8.55809517,7.43294953 C8.23531459,7.74611298 8.23531459,8.25388736 8.55809517,8.56693769 L12,11.9062921 L9.84187871,14 L4.24208544,8.56693751 C3.91930485,8.25388719 3.91930485,7.74611281 4.24208544,7.43294936 L9.84199531,2 L11.9998836,4.09370803 Z"></path>
                </svg>
                Back to our site
              </Link>
            </p>
          </div>
        </div>
    </div>
    <Footer/>
    </main>
    )
  }
}


export default ThankYou;