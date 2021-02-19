import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="content__conteiner content__conteiner__header">
          <div className="header__logo">
            <a href="#" className="header__logo__icon"></a>
          </div>

          <div className="header__button"></div>

          <div className="header__link">
            <nav className="header__nav">
              <a href="#" className="header__nav__link">
                HOME
              </a>
              <a href="#" className="header__nav__link">
                ABOUT
              </a>
              <a href="#" className="header__nav__link">
                SERVICES
              </a>
              <a href="#" className="header__nav__link">
                WORK
              </a>
              <a href="#" className="header__nav__link">
                CONTACT
              </a>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
