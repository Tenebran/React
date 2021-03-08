import React, { Component } from 'react';
import './TodoListItem.scss';

export default class TodoListItem extends Component {
  onEditForm = () => {
    this.props.onToggle();
  };

  onContactDelete = e => {
    e.stopPropagation();

    this.props.onDelete(this.props.item.id);
  };

  render() {
    const { item } = this.props;

    return (
      <>
        <li>
          <ul className="contact-info">
            <li className="contact-info__item">
              <span className="contact-info__name">Name:</span> {item.name}
            </li>
            <li className="contact-info__item">
              <span className="contact-info__name">Surname:</span> {item.surname}
            </li>
            <li className="contact-info__item">
              <span className="contact-info__name">Phone:</span> {item.phone}
            </li>
            <div>
              <button onClick={this.onContactDelete} className="contact-info__button">
                Delete
              </button>
            </div>
          </ul>
        </li>
      </>
    );
  }
}
