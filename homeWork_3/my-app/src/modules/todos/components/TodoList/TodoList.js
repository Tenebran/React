import React, { Component } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(item => (
          <TodoListItem
            key={item.id}
            item={item}
            onDelete={this.props.onDelete}
            onToggle={this.props.onToggle}
          />
        ))}
      </ul>
    );
  }
}
