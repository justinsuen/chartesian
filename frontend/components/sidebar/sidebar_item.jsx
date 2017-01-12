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
    this.renderShareActions = this.renderShareActions.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({isOpened: !this.state.isOpened});
    $(`.${this.props.type} > button`).toggleClass("clicked");
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

  renderShareActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/">Share settings</Link>
        <Link to="/">Shared assets</Link>
        <Link to="/">All shared with me</Link>
        <Link to="/">Groups</Link>
      </div>
    );
  }

  renderActions(type) {
    if (type === "chart") {
      return this.renderChartActions(type);
    } else if (type === "dashboard") {
      return this.renderDashboardActions(type);
    } else {
      return this.renderShareActions(type);
    }
  }

  render() {
    const {type} = this.props;
    return (
      <div className={`sidebar-item ${type}`}>
        <button onClick={this.handleClick}>{type}</button>
        <Collapse isOpened={this.state.isOpened} className="sidebar-actions-wrap">
          {this.renderActions(type)}
        </Collapse>
      </div>
    );
  }
}

export default SidebarItem;
