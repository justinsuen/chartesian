import React from 'react';
import {Link} from 'react-router';
import SidebarItem from './sidebar_item';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser, logout} = this.props;

    if(currentUser) {
      return (
        <div className="sidebar">
          <h2>Actions</h2>
          <SidebarItem type="dashboard" />
          <SidebarItem type="chart" />
          <SidebarItem type="share" />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Sidebar;
