import React from "react";
import { axiosWithAuth } from '../utils/AxiosWithAuth';

class Login extends React.Component{
  state = {
    credentials: {
        username: "",
        password: ""
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
        .post("/api/color", this.state.credentials)
        .then((res) => {
            window.localStorage.setItem("token", res.data.payload);
            this.props.history.push("/bubble-page");
        })
        .catch((err) => console.log(err));
};
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  render() {
    return (
        <div>
          <h1>Welcome to the Bubble App!</h1>
                <p>Build a login page here</p>
            <form onSubmit={this.login}>
                <input
                    type="text"
                    name="username"
                    placeholder='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='password'
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                />
            </form>
            <button>Log in</button>
            
              
        </div>
    );
}
}
  
export default Login 
  