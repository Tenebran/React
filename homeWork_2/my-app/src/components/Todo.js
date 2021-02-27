import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return <td className={this.props.name === true ? 'green' : 'red'}>{this.props.title}</td>;
  }
}
