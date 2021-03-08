import React, { Component } from 'react';
import './TodoForm.scss';

export default class TodoForm extends Component {
  state = {
    todo: {
      name: '',
      surname: '',
      phone: '',
    },

    visible: true,
  };

  onInputChange = e => {
    this.setState({
      todo: { ...this.state.todo, [e.target.name]: e.target.value },
    });
  };
  onFormSubmit = e => {
    e.preventDefault();

    this.props.onSave(this.state.todo);
    this.setState({ todo: { name: '', surname: '', phone: '' } });
    this.props.onToggle();
  };

  onItemClick = e => {
    this.props.onToggle();
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <h3 className="form__title">User Add</h3>
        <div>
          <span className="contact-info__name form__comtact form__comtact-name">Name:</span>
          <input
            className="form__input"
            value={this.state.todo.name}
            name="name"
            onChange={this.onInputChange}
          ></input>
        </div>
        <div>
          <span className="contact-info__name form__comtact form__comtact-surname">Surname:</span>
          <input
            className="form__input"
            value={this.state.todo.surname}
            name="surname"
            onChange={this.onInputChange}
          ></input>
        </div>
        <div>
          <span className="contact-info__name form__comtact form__comtact-phone">Phone:</span>
          <input
            className="form__input"
            value={this.state.todo.phone}
            name="phone"
            type="tel"
            onChange={this.onInputChange}
          ></input>
        </div>
        <div className="form__button-wrapper">
          <button type="submit" className="contact-info__button  form__button-send">
            Send
          </button>
          <button
            onClick={this.onItemClick}
            type="button"
            className="contact-info__button  form__button-send"
          >
            Clouse
          </button>
        </div>
      </form>
    );
  }
}
