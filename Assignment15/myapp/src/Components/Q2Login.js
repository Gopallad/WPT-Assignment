import React, { Component } from "react";

class Q2Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            message: ""
        };
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleLogin = () => {
        if (this.state.username === "iet" && this.state.password === "iet") {
            this.setState({ message: "Hello " + this.state.username });
        } else {
            this.setState({ message: "Invalid Credentials" });
        }
    };

    render() {
        return (
            <div>
                <h2>Login Form</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    onChange={this.handleChange}
                />
                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={this.handleChange}
                />
                <br /><br />

                <button onClick={this.handleLogin}>Login</button>

                <h3>{this.state.message}</h3>
            </div>
        );
    }
}

export default Q2Login;