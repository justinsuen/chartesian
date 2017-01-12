import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import DataSourceReducer from './data_source_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  dataSource: DataSourceReducer
});

export default RootReducer;
