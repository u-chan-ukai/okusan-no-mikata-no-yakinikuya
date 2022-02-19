import React from 'react'
import Helmet from "react-helmet"

import './variables.css'
import './global.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
        <Seo />
        {
          process.env.NODE_ENV === "production" ? (
            <Helmet>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-GNSBNT6G4M"></script>
              <script>
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-GNSBNT6G4M');
                `}
              </script>
            </Helmet>
          ) : ""
        }
        <Navigation />
        <main>{children}</main>
        <Footer />
      </>
    )
  }
}

export default Template
