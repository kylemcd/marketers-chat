import React, { Component } from 'react';
import { Router } from '@reach/router';
import ReactGA from 'react-ga';
import './fonts.css';

import LandingPage from './pages/LandingPage';

ReactGA.initialize('UA-78427684-5');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <LandingPage path="/"/>
        </Router>
      </div>
    );
  }
}

export default App;
