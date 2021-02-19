import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content__conteiner">
          <div className="footer__wrapper__block">
            <div className="footer__company__block">
              <div className="footer__title">COMPANY</div>
              <div className="footer__logo">
                <a href="#" className="footer__logo__icon"></a>
              </div>
              <div className="footer__text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat.
              </div>
            </div>

            <div className="footer__links__block">
              <ul className="footer__links__section1">
                <li className="footer__links footer__links__name">LINKS</li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    HOME
                  </a>
                </li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    ABOUT
                  </a>
                </li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    SERVICES
                  </a>
                </li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    PROJECT
                  </a>
                </li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    CONTACT US
                  </a>
                </li>
              </ul>

              <ul className="footer__links__section2">
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    FAQ
                  </a>
                </li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    ERMS
                  </a>
                </li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    CAREERS
                  </a>
                </li>
              </ul>

              <ul className="footer__links__section2">
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    BLOG
                  </a>
                </li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    PARTNERS
                  </a>
                </li>
                <li className="footer__links">
                  <a href="#" className="footer__links__link">
                    NEWS
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer__contact__block">
              <div className="footer__contact__title">CONTACT US</div>
              <div className="footer__contact__info">
                213 Baker Street Oriel City Kounty 7000 KNW,Kountry Name{' '}
              </div>
              <div className="footer__contact__info"> +23 994 233 4022</div>
              <div className="footer__contact__info">info@konstruct.com</div>
            </div>

            <div className="footer__social">
              <a href="#" className="footer__social__icon fab fa-facebook-square"></a>
              <a href="#" className="footer__social__icon fab fa-twitter"></a>
              <a href="#" className="footer__social__icon google fab fa-google"></a>
            </div>
          </div>
        </div>
        <div className="footer__end">
          <div className="content__conteiner">
            <span className="footer__end__text">© 2020 Sergiy Garkusha</span>
          </div>
        </div>
      </footer>
    );
  }
}
