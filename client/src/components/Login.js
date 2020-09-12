import React, {useState} from "react";
// import { axiosWithAuth } from '../utils/AxiosWithAuth';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login =() =>{


const [state,setState] =useState({
  username: "",
  password: ""

});
        
const history= useHistory();
const handleChange = e => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
        
const login = e => {
    e.preventDefault();
    axios
        .post("http://localhost:5000/api/login")
        .then((res) => {
           localStorage.setItem('token',res.data.payload);
           history.push('/protected');
        })
        .catch((err) => console.log(err));
};
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

    return (
        <div>
          {/* <h1>Welcome to the Bubble App!</h1> */}
                {/* <p>Build a login page here</p> */}
            <form onSubmit={login}>
                <input
                    type="text"
                    name="username"
                    placeholder='username'
                    value={state.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder='password'
                    value={state.password}
                    onChange={handleChange}
                />
            </form>
            <button>Log in</button>
            
              
        </div>
    );
}

  
export default Login 
  