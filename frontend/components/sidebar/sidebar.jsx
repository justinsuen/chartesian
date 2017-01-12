import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {currentUser, logout} = this.props;

    if(currentUser) {
      return (
        <div className="sidebar">
          <h2>Menu</h2>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Sidebar;
