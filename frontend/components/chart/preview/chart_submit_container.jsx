import React from 'react';
import { connect } from 'react-redux';

import ChartSubmit from './chart_submit.jsx';
import { createChart } from '../../../actions/chart_actions';
import { createShare } from '../../../actions/share_actions';

const mapStateToProps = state => ({
  errors: state.chart.errors
});

const mapDispatchToProps = dispatch => ({
  createChart: (chart, sharedUsers) => {
    dispatch(createChart(chart))

    // Create shares using ajax success callback
    return (
      $.ajax({
        method: "GET",
        url: "api/user/charts",
        success: (res) => {
          let chartId = res[res.length-1].id;
          sharedUsers.forEach((username) =>
            dispatch(createShare(username, chartId))
          );
        }
      })
    )
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartSubmit);
