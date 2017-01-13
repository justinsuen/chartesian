import { connect } from 'react-redux';
import { deleteDataSource } from '../../../actions/data_source_actions';
import DataSourceIndex from './data_source_index.jsx';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = dispatch => ({
  deleteDataSource: id => dispatch(deleteDataSource(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataSourceIndex);
