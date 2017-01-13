import React from 'react';
import {Link} from 'react-router';
import Collapse from 'react-collapse';
import {toTitleCase} from '../../util/util_func';

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
        <Link to="/dashboards/new">Create dashboard</Link>
        <Link to="/dashboards">All dashboards</Link>
      </div>
    );
  }

  renderChartActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/charts/new">Create chart</Link>
        <Link to="/charts">All charts</Link>
      </div>
    );
  }

  renderDataSourceActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/data_sources/new">Import data source</Link>
        <Link to="/data_sources">All data sources</Link>
      </div>
    );
  }

  renderShareActions(type) {
    return(
      <div className="sidebar-actions">
        <Link to="/share/groups">Groups</Link>
        <Link to="/share/me">Shared assets</Link>
        <Link to="/share/all">Shared with me</Link>
        <Link to="/share/settings">Share settings</Link>
      </div>
    );
  }

  renderActions(type) {
    switch(type){
      case "chart":
        return this.renderChartActions(type);
      case "dashboard":
        return this.renderDashboardActions(type);
      case "data-source":
        return this.renderDataSourceActions(type);
      case "share":
        return this.renderShareActions(type);
    }
  }

  render() {
    const {type} = this.props;
    const text = toTitleCase(type);

    return (
      <div className={`sidebar-item ${type}`}>
        <button onClick={this.handleClick}>
          <i className="fa fa-chevron-down"></i>
          {text}
        </button>
        <Collapse isOpened={this.state.isOpened} className="sidebar-actions-wrap">
          {this.renderActions(type)}
        </Collapse>
      </div>
    );
  }
}

export default SidebarItem;
