import React, { Component } from "react";
import firebase from "../firebase";
class Login extends Component {
  state = {
    username: "jeetu jitender",
    password: "Jeetu!1"
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleLogin = () => {
    const vendorRef = firebase.database().ref("vendors");
    vendorRef
      .orderByChild("username")
      .equalTo(this.state.username)
      .on("child_added", snap => {
        const vendor = snap.val();

        if (vendor.password === this.state.password) {
          this.props.handlePostLogin(vendor, snap.key);
        }
      });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div>
        <input
          type="text"
          name="username"
          placeholder="guptadeepak"
          onChange={this.handleInput}
          value={username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={this.handleInput}
          value={password}
        />
        <input
          type="button"
          value="login"
          onClick={() => {
            this.handleLogin();
          }}
        />
      </div>
    );
  }
}

export default Login;
