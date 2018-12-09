import React, { Component, Fragment } from 'react';
import Helmet from 'react-helmet';

import LandingHero from '../../components/LandingHero';
import About from '../../components/About';

class LandingPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet title="Makers Battle">
          <meta property="og:title" content="Makers Battle" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://makersbattle.com" />
          <meta property="og:image" content="opengraph.png" />
        </Helmet>
        <LandingHero />
        <About />
      </Fragment>
    );
  }
}

export default LandingPage;