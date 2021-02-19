import React, { Component } from 'react';

export default class Hello extends Component {
  render() {
    return (
      <section className="hello">
        <div className="content__conteiner">
          <a href="#" className="hello__logo">
            <img src="./projeco-logo.png" alt="logo__white" />
          </a>
          <h1 className="hello__title">PARTNER WITH KONSTUCT</h1>
          <h2 className="hello__subtitle">An award-winning construction management firm</h2>
          <a href="#" className="hello__scroll">
            SCROLL DOWN
          </a>
        </div>
      </section>
    );
  }
}
