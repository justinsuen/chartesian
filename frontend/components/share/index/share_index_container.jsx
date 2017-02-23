import { connect } from 'react-redux';
import ShareIndex from './share_index.jsx';

import { fetchInCharts } from '../../../actions/share_actions';
import { allCharts } from '../../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  return ({
    charts: allCharts(state.share)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchInCharts: () => dispatch(fetchInCharts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShareIndex);
