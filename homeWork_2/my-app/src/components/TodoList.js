import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <tr>
        {this.props.todos.map(todo => (
          <Todo key={todo.id} title={todo.title} name={todo.completed}></Todo>
        ))}
      </tr>
    );
  }
}
