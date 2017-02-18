import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import DataSourceReducer from './data_source_reducer';
import ChartReducer from './chart_reducer';
import ShareReducer from './share_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  source: DataSourceReducer,
  chart: ChartReducer,
  share: ShareReducer
});

export default RootReducer;
