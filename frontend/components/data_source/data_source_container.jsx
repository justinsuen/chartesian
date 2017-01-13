import { connect } from 'react-redux';
import { deleteDataSource } from '../../actions/data_source_actions';
import DataSource from './data_source.jsx';

const mapDispatchToProps = dispatch => ({
  deleteDataSource: id => dispatch(deleteDataSource(id))
});

export default connect(
  null,
  mapDispatchToProps
)(DataSource);
