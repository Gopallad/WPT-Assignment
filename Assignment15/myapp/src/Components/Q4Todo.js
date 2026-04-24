import React, { Component } from "react";

class Q4Todo extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            tasks: []
        };
    }

    handleChange = (e) => {
        this.setState({ task: e.target.value });
    };

    addTask = () => {
        if (this.state.task !== "") {
            this.setState({
                tasks: [...this.state.tasks, this.state.task],
                task: ""
            });
        }
    };

    render() {
        return (
            <div>
                <h2>Todo App</h2>

                <input
                    type="text"
                    value={this.state.task}
                    onChange={this.handleChange}
                    placeholder="Enter Task"
                />

                <button onClick={this.addTask}>Add Task</button>

                <ol>
                    {this.state.tasks.map((t, index) => (
                        <li key={index}>{t}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Q4Todo;