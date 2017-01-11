import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';

const App = ({ children }) => (
  <div className="app-container">
    <HeaderContainer />
    <div className="app-body">
      { children }
    </div>
    <Footer />
  </div>
);

export default App;
