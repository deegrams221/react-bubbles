import React from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route


class Login extends React.Component {
  state = {
    credentials: {
      username: 'Lambda School',
      password: 'i<3Lambda4'
    }
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
    // post request
      .post('/login', this.state.credentials)
      .then(res => {
        // localStorage
        localStorage.setItem('token', res.data.payload);
        // redirect
        this.props.history.push('/protected');
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className='login-form'>
        <h1>Welcome to the Bubble App!</h1>
        <form onSubmit={this.login}>
          <input type='text' name='username' value={this.state.credentials.username} onChange={this.handleChange} />
          <input type='password' name='password' value={this.state.credentials.password} onChange={this.handleChange} />
          <button>Login</button>
        </form>
      </div>
    );
  }
};

export default Login;
