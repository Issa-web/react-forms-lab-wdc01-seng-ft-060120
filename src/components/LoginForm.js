import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''

    };
  }
  handleUsername = event => (
    this.setState({
      username: event.target.value
    })
  )

  handlePassword = event => (
    this.setState({
      password: event.target.value
    })
  )

  handleSubmit = event => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
            onChange={event => this.handleUsername(event)}
            value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"
            onChange={event => this.handlePassword(event)} 
            value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
