import React from 'react';
import {Provider} from 'react-redux';

// react router
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

// react components
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this._ensureLoggedIn = this._ensureLoggedIn.bind(this);
    this._redirectIfLoggedIn = this._redirectIfLoggedIn.bind(this);
  }

  _ensureLoggedIn(nextState, replace) {
    const currentUser = this.props.store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
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
            <IndexRoute component={ HomeContainer } onEnter={this._ensureLoggedIn}/>
            <Route path="/login" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}/>
            <Route path="/signup" component={SessionFormContainer} onEnter={this._redirectIfLoggedIn}/>
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default Root;
