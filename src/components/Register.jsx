import React, { Component } from "react";
import firebase from "../firebase";

class Register extends Component {
  state = {
    username: "",
    password: "",
    name: "",
    email: "",
    contact: "",
    shopname: "",
    id: ""
  };
  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegister = () => {
    const vendorRef = firebase.database().ref("vendors");
    const vendor = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.password,
      email: this.state.email,
      contact: this.state.contact,
      shopname: this.state.shopname
    };
    const id = vendorRef.push(vendor).key;
    console.log("vendor added");
    this.setState({
      username: "",
      password: "",
      name: "",
      email: "",
      contact: "",
      shopname: ""
    });

    vendorRef.once("child_added", snap => {
      const vendor = snap.val();
      this.props.handleSubmit(vendor, id);
    });

    // return id;
  };
  render() {
    const { username, password, name, email, contact, shopname } = this.state;
    return (
      <div>
        <input
          type="text"
          name="username"
          placeholder="gupta"
          onChange={this.handleInput}
          value={username}
        />
        <input
          type="password"
          name="password"
          placeholder="Abc@1"
          onChange={this.handleInput}
          value={password}
        />
        <input
          type="text"
          name="name"
          placeholder="deepak gupta"
          onChange={this.handleInput}
          value={name}
        />
        <input
          type="email"
          name="email"
          placeholder="gdeepak@gmail.com"
          onChange={this.handleInput}
          value={email}
        />
        <input
          type="text"
          name="contact"
          placeholder="9156856842"
          onChange={this.handleInput}
          value={contact}
        />
        <input
          type="text"
          name="shopname"
          placeholder="chinese corner"
          onChange={this.handleInput}
          value={shopname}
        />

        <input type="button" value="signup" onClick={this.handleRegister} />
      </div>
    );
  }
}

export default Register;
