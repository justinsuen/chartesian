import React from 'react';
import {Link} from 'react-router';
import SidebarItem from './sidebar_item';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  buildChildren(types) {
    return(
      types.map((type, idx) => <SidebarItem key={idx} type={`${type}`} />)
    );
  }

  render() {
    const {currentUser, logout} = this.props;
    const types = ["dashboard", "chart", "datasource", "share"];

    if(currentUser) {
      return (
        <div className="sidebar">
          <h2>Actions</h2>
          {this.buildChildren(types)}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Sidebar;
