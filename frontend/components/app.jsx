import React from 'react';
import { withRouter } from 'react-router';
import HeaderContainer from './header/header_container';
import SidebarContainer from './sidebar/sidebar_container';
import FooterContainer from './footer/footer_container';

class App extends React.Component {
  render() {
    return(
      <div className="app-container">
        <HeaderContainer />
        <div className="app-body">
          <SidebarContainer />
          <div className="app-content">
            { this.props.children }
          </div>
        </div>
        <FooterContainer />
      </div>
    );
  }
}

export default withRouter(App);
