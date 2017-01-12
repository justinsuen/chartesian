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
    this.renderDataSourceActions = this.renderDataSourceActions.bind(this);
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
        <Link to="/">Create dashboard</Link>
        <Link to="/">All dashboards</Link>
      </div>
    );
  }

  renderChartActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/">Created chart</Link>
        <Link to="/">All charts</Link>
      </div>
    );
  }

  renderDataSourceActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/">Import datasource</Link>
        <Link to="/">All datasources</Link>
      </div>
    );
  }

  renderShareActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/">Groups</Link>
        <Link to="/">Shared assets</Link>
        <Link to="/">Shared with me</Link>
        <Link to="/">Share settings</Link>
      </div>
    );
  }

  renderActions(type) {
    switch(type){
      case "chart":
        return this.renderChartActions(type);
      case "dashboard":
        return this.renderDashboardActions(type);
      case "datasource":
        return this.renderDataSourceActions(type);
      case "share":
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
