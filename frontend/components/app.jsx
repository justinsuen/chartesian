import React from 'react';
import { Link } from 'react-router';
import HeaderContainer from './header/header_container';
import Footer from './footer/footer';

class App extends React.Component {
  render() {
    return(
      <div className="app-container">
        <HeaderContainer />
        <div className="app-body">
          { this.props.children }
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
