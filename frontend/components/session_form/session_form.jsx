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
    this.fillInput = this.fillInput.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  componentWillUnmount() {
    clearTimeout(this.t1);
    clearTimeout(this.t2);
    clearTimeout(this.t3);
    clearTimeout(this.t4);
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
          ref="email"
					placeholder="email (optional)"
					value={this.state.email}
					onChange={this.update("email")}
					className="login-input"/>
      );
    }
  }

  // demo account functions
  renderDemoButton() {
    if (this.props.formType === "signup") {
      return (
        <button className="button demo" onClick={this.createDemoUser} >
          Demo
        </button>
      );
    }
  }

  createDemoUser(e) {
    e.preventDefault();
    const randNum = `${genRandNum(1000)}`;
    const username = `chartesian${randNum}`;
    const password = "c0g17o-Erg0-$uM";

    this.fillInput('username', username);
    this.t1 = setTimeout(() => {
      this.fillInput('password', password);
      this.t2 = setTimeout(() => {
        const user = this.state;
        this.props.processForm(user);
      }, 850);
    }, 700);
  }

  fillInput(input, str, n = 1) {
		this.t4 = setTimeout(()=>{
			if (n < str.length) {
        this.fillInput(input, str, n + 1);
      }
			this.setState({[input]: str.slice(0, n)});
		}, 50);
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
  							className="button"/>

              {this.renderDemoButton()}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
