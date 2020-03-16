import React from 'react';

class Todo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { todos: [], todo: '' };
  }

  handleTodoInput = e => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(state => {
      state.todos.push(state.todo);
      state.todo = '';
      return state;
    });

  };

  render() {
    return (
      <div>
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.todo} onChange={this.handleTodoInput} />
          <button>
            Save
          </button>
        </form>
        <ol>
          {this.state.todos.map(todo => <li key={todo}>{todo}</li>)}
        </ol>
      </div>
    );
  }
}

export default Todo;