import { connect } from 'react-redux';
import { deleteDataSource, fetchDataSources } from '../../../actions/data_source_actions';
import { allDataSources } from '../../../reducers/selectors';
import DataSourceIndex from './data_source_index.jsx';

const mapStateToProps = (state, ownProps) => ({
  dataSources: allDataSources(state.source),
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  fetchDataSources: () => dispatch(fetchDataSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSourceIndex);
