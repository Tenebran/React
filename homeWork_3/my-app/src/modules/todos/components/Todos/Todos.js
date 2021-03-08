import React, { Component } from 'react';
import { deleteContacts, getTodos, newTodos } from '../../../services/todosServices';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList/TodoList';
import './Todos.scss';

export default class Todos extends Component {
  state = {
    list: [],
    visible: false,
  };

  componentDidMount() {
    getTodos().then(list => this.setState({ list }));
  }

  togleThis() {
    console.log('hey');
  }

  toggleForm = () => {
    this.setState({ visible: !this.state.visible });
  };

  deleteContact = id => {
    deleteContacts(id);

    this.setState({
      list: this.state.list.filter(item => item.id !== id),
    });
  };

  createItem = newTodo => {
    newTodos(newTodo).then(data => {
      this.setState({ list: [...this.state.list, data] });
    });
  };

  render() {
    return (
      <div className="wrapper-contacts">
        <div>
          {this.state.visible ? null : (
            <TodoList
              list={this.state.list}
              visible={this.state.visible}
              onDelete={this.deleteContact}
              onToggle={this.toggleForm}
            />
          )}
          {this.state.visible ? (
            <TodoForm onSave={this.createItem} onToggle={this.toggleForm} />
          ) : null}

          <button
            onClick={this.toggleForm}
            className=" contact-info__button contact-info__button__add "
          >
            {this.state.visible ? 'Close' : 'Add'}
          </button>
        </div>
      </div>
    );
  }
}
