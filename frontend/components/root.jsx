import React from 'react';
import {Provider} from 'react-redux';

// react router
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';

import DataSourceContainer from './data_source/data_source_container';
import DataSourceIndexContainer from './data_source/index/data_source_index_container';
import DataSourceFormContainer from './data_source/form/data_source_form_container';

import ChartContainer from './chart/chart_container';
import ChartIndexContainer from './chart/index/chart_index_container';
import ChartBuildContainer from './chart/build/chart_build_container';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = this.props.store.getState().session.currentUser;
    if (!currentUser) {
      replace('/signup');
    }
  }

  _redirectIfLoggedIn(nextState, replace) {
    const currentUser = this.props.store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={HomeContainer} onEnter={this._ensureLoggedIn}/>
            <Route path="login" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}/>
            <Route path="signup" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}/>
            <Route path="data_sources" component={DataSourceContainer}>
              <IndexRoute component={DataSourceIndexContainer} onEnter={this._ensureLoggedIn}/>
              <Route path="new" component={DataSourceFormContainer} onEnter={this._ensureLoggedIn}/>
            </Route>
            <Route path="charts" component={ChartContainer}>
              <IndexRoute component={ChartIndexContainer} onEnter={this._ensureLoggedIn}/>
              <Route path="new" component={ChartBuildContainer} onEnter={this._ensureLoggedIn}/>
            </Route>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
