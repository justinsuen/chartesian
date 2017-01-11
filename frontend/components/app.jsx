import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="app-container">
    <div className="app-header">
      <div className="logo"><h1>Chartesian</h1></div>
      <GreetingContainer />
    </div>
    <div className="app-body">
      { children }
    </div>
    <Footer />
  </div>
);

export default App;
