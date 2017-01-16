import { connect } from 'react-redux';
import { deleteChart } from '../../actions/chart_actions';
import Chart from './chart.jsx';

const mapDispatchToProps = dispatch => ({
  deleteChart: id => dispatch(deleteChart(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Chart);
