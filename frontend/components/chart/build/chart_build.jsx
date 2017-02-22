import React from 'react';
import {withRouter} from 'react-router';
import ChartFormContainer from '../form/chart_form_container';
import ChartPreviewContainer from '../preview/chart_preview_container';

class ChartBuild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      xAxes: [],
      yAxes: [],
      sharedUsers: []
    };

    this.updateAxes = this.updateAxes.bind(this);
    this.updateSharedUsers = this.updateSharedUsers.bind(this);
  }

  updateAxes(xAxes, yAxes) {
    this.setState({xAxes, yAxes});
  }

  updateSharedUsers(usernames) {
    let sharedUsers = this.state.sharedUsers;
    sharedUsers.concat(usernames);
    this.setState({sharedUsers});
  }

  render() {
    let {xAxes, yAxes, sharedUsers} = this.state;

    return (
      <div className="chart-build-container">
        <ChartFormContainer
          xAxes={xAxes}
          yAxes={yAxes}
          sharedUsers={sharedUsers}
          updateAxes={this.updateAxes}
          updateSharedUsers={this.updateSharedUsers}/>
        <ChartPreviewContainer
          xAxes={xAxes}
          yAxes={yAxes}
          sharedUsers={sharedUsers}/>
      </div>
    );
  }
}

export default withRouter(ChartBuild);
