import React from 'react';
import {Link, withRouter} from 'react-router';
import {merge} from 'lodash';
import {genRandNum} from '../../util/util_func';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      demo: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.createDemoUser = this.createDemoUser.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  update(field) {
    return e => this.setState({[field]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`} className="error-list-item">
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderEmailForm() {
    if (this.props.formType === "signup") {
      return (
        <input type="text"
					placeholder="email (optional)"
					value={this.state.email}
					onChange={this.update("email")}
					className="login-input"/>
      );
    }
  }

  renderDemoButton() {
    if (this.props.formType === "signup") {
      return (
        <button className="button demo" onClick={this.createDemoUser} >
          Demo
        </button>
      );
    }
  }

  createDemoUser() {
    const username = `demo-user-${genRandNum(1000)}`;
    const password = "c0g17o-Erg0-$uM";
    const email = `${username}@chartesian.com`;
    this.setState({username, password, email, demo: true});
  }

  render() {
    return (
      <div className="main-login-splash">
        <div className="login-form-box">
          <h3>{this.props.formType === "login" ? "Log in" : "Sign up"}</h3>
          {this.renderErrors()}
          <form onSubmit={this.handleSubmit} className="login-form-container">
            <div className="login-form">
              <input type="text"
  							placeholder="username"
  							value={this.state.username}
  							onChange={this.update("username")}
  							className="login-input"/>

              <input type="password"
  							placeholder="password"
  							value={this.state.password}
  							onChange={this.update("password")}
  							className="login-input"/>

  						{this.renderEmailForm()}

              <input type="submit"
  							value="Submit"
  							className="button"/>

              {this.renderDemoButton()}
            </div>
          </form>
        </div>
      </div>
    );
  }

}

// Possible graphics for later
// <div className="main-login-graphic">
//   <img src={require('../../../app/assets/images/chart-icons/bar-chart.png')} />
//   <img src={require('../../../app/assets/images/chart-icons/analytics-4.png')} />
//   <img src={require('../../../app/assets/images/chart-icons/stats.png')} />
// </div>

export default withRouter(SessionForm);
