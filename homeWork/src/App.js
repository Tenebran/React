import React, { Component } from 'react';
import Hello from './Hello';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Hello></Hello>
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}
