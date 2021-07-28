import React from "react";
// import { Textfield, Button } from 'react-mdl'

function Login() {
  return (
    <div className="loginbody">
      <div className="logincontent">
        <div className="loginhead">
          {/* -- main heading -- */}
          <h1 className="logintitle">
            Login <span> and see the world </span>
          </h1>
          {/* -- subheading -- */}
          <p className="loginsub">
            Using this travel blog, you can start traveling whilst knowing you
            are safe. We have up-to-date information on the crime activity
            withinthe U.S. and other information!
            <br></br>
            <br></br>
            If you want to post pictures, add add comments, reviews or ratings,
            sign up for free!
            <br></br>
            <br></br> Otherwise, feel free to explore the website!
          </p>
        </div>

        <div className="form">
          <form>
            <input
              className="logininput"
              type="text"
              placeholder="Username"
            ></input>
            <input
              className="logininput"
              type="password"
              placeholder="Password"
            ></input>
            <button className="loginbutton" type="submit" value="">
              Login
            </button>
            <button className="signupbutton" type="submit" value="">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* -- exporting -- */
export default Login;
