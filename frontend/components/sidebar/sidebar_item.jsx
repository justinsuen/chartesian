import React from 'react';
import {Link} from 'react-router';
import Collapse from 'react-collapse';

class SidebarItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOpened: false};
    this.handleClick = this.handleClick.bind(this);
    this.renderActions = this.renderActions.bind(this);
    this.renderChartActions = this.renderChartActions.bind(this);
    this.renderDashboardActions = this.renderDashboardActions.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({isOpened: !this.state.isOpened});
  }

  renderDashboardActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/">All items</Link>
        <Link to="/">Created by me</Link>
        <Link to="/">Shared with me</Link>
      </div>
    );
  }

  renderChartActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/">All items</Link>
        <Link to="/">Created by me</Link>
        <Link to="/">Shared with me</Link>
      </div>
    );
  }

  renderActions(type) {
    if (type === "chart") {
      return this.renderChartActions(type);
    } else {
      return this.renderDashboardActions(type);
    }
  }

  render() {
    const {type} = this.props;
    return (
      <div className="sidebar-item">
        <button onClick={this.handleClick}>{type}</button>
        <Collapse isOpened={this.state.isOpened} className="sidebar-actions-wrap">
          {this.renderActions(type)}
        </Collapse>
      </div>
    );
  }
}

export default SidebarItem;
