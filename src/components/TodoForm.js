import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }
  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addTodo}>
          <input
            type="text"
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })}
            placeholder="type new todo here..."
          />
        </form>
      </div>
    );
  }
}

export default TodoForm;
