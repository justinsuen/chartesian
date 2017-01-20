import { connect } from 'react-redux';
import { deleteDataSource } from '../../../actions/data_source_actions';
import DataItem from './data_item.jsx';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors
});

const mapDispatchToProps = dispatch => ({
  deleteDataSource: id => dispatch(deleteDataSource(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataItem);
