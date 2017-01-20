import { connect } from 'react-redux';
import { deleteDataSource, fetchDataSources } from '../../../actions/data_source_actions';
import { sourceById } from '../../../reducers/selectors';
import DataItem from './data_item.jsx';

const mapStateToProps = (state, ownProps) => {
  return {
    dataSource: sourceById(state.source, ownProps.id),
    errors: state.errors
  };
};

const mapDispatchToProps = dispatch => ({
  deleteDataSource: id => dispatch(deleteDataSource(id)),
  fetchDataSource: id => dispatch(fetchDataSources(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataItem);
