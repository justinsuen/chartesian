import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import DataSourceReducer from './data_source_reducer';
import ChartReducer from './chart_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  dataSource: DataSourceReducer,
  chart: ChartReducer
});

export default RootReducer;
