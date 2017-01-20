import React from 'react';
import {Link, hashHistory} from 'react-router';
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
    const types = ["chart", "data-source", "share"];
    if (this.props.currentUser) {
      return (
        <div className="sidebar">
          <h2>Actions</h2>
          <Link to="/" className="top-level-link">
            <i className="fa fa-home"></i>
            Home
          </Link>
          {this.buildChildren(types)}
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Sidebar;
