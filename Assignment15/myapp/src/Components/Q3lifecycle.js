import React, { Component } from "react";

class Q3lifecycle extends Component {
    constructor() {
        super();
        this.state = { count: 0 };
        console.log("Constructor Called");
    }

    componentDidMount() {
        console.log("Component Mounted");
    }

    componentDidUpdate() {
        console.log("Component Updated");
    }

    componentWillUnmount() {
        console.log("Component Unmounted");
    }

    render() {
        console.log("Render Called");
        return (
            <div>
                <h2>Lifecycle Demo</h2>
                <h3>{this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Update
                </button>
            </div>
        );
    }
}

export default Q3lifecycle;