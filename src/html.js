import React from 'react'
import PropTypes from 'prop-types'

import favicon from './images/favicon.ico'

export default function HTML(props) {
  return (
    <html lang="en" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no"
        />
        <link rel="shortcut icon" href={favicon} type="image/png"></link>
        <link rel="icon" href={favicon} type="image/x-icon"></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css"
        />

        <script dangerouslySetInnerHTML={{
          __html: `!function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t,e){var n=document.createElement("script");n.type="text/javascript";n.async=!0;n.src="https://cdn.segment.com/analytics.js/v1/"+t+"/analytics.min.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);analytics._loadOptions=e};analytics.SNIPPET_VERSION="4.1.0";
          analytics.load("NXFyhJelTuJ9UNeMieU1JijxqxTzRRtv");
          //analytics.page();
          }}()`
        }} />

        
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MLC7MJR');`
        }} />

           
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css"
        />

        {props.headComponents}

        
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
         
        <noscript dangerouslySetInnerHTML={{ 
         __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MLC7MJR"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
        }} />


        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `{
            "@context": "http://schema.org/",
            "@type": "Organization",
            "name": "Lime Proxies",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "340 S Lemon Ave #9836",
              "addressLocality": "Walnut",
              "addressRegion": "CA",
              "postalCode": "91789 "
            },
            "telephone": "+1-855-442-9755"
          }`
        }} />

        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: `{
          "@context" : "http://schema.org",
          "@type" : "SoftwareApplication",
          "name" : "Lime Proxies",
          "description": "Lime Proxies offers the best private proxy services in the industry, with 40+ locations, 100+ subnets and blistering 1 gbps speed. Buy online today!.",
          "image": "https://www.limeproxies.com/Images/limeproxies-logo.png",
          "url" : "https://www.limeproxies.com/",
          "applicationCategory" : "Lime Proxies",
          "operatingSystem" : "Windows, Mac, Linux, Android, IOS",
          "softwareVersion" : "1.0",
          "screenshot" : "https://www.limeproxies.com/Images/limeproxies-logo.png",
          "featureList " : "ip authentication, Instant ip refresh, Powerful network,Managed support,
          Control panel, Locations",
          "offers": {
              "@type": "Offer",
              "price": "1",
              "priceCurrency": "USD",
              "name" : "$100 per 100 proxies",
              "url" : "https://www.limeproxies.com/pricing"
            },
              "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "100"
            },
            "author": {
              "@type" : "Organization",
            "name" : "Lime Proxies"}
          }`
        }} />
       


      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
