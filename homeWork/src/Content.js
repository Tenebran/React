import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return (
      <section className="story">
        <div className="content__conteiner">
          <div className="story__block__title">
            <h4 className="story__title">OUR STORY</h4>
            <div className="story__line"></div>
          </div>
          <div className="story__content story__content__block">
            <div className="stor__text">
              <div className="story__text__title">
                Founded in 2011 by John Mathew Smith,{' '}
                <a href="#" className="story__link">
                  Konstruct
                </a>{' '}
                has become the number one construction management firm
              </div>
              <div className="story__text__subtitle">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                dolore magna aliquam erat.
              </div>
            </div>

            <div className="story__card story__content__block">
              <div className="story__item story__item1">WE PLAN</div>
              <div className="story__item story__item2">WE MANAGE</div>
              <div className="story__item story__item3">WE BUILD</div>
            </div>
          </div>

          <div className="story__our">
            <div className="story__title__info">
              <h4 className="story__our__title">OUR CAPABILITIES</h4>
              <div className="story__our__line"></div>
            </div>
            <div className="story__our__text">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat.
            </div>
            <div className="sroty__our__button">
              <a href="#" className="story__button__link">
                ALL SERVICES
              </a>
            </div>
          </div>

          <div className="story__menu">
            <div className="story__menu__list">
              <img src="/project.png" alt="project" className="story__menu__icon" />
              <h4 className="story__menu__title">PROJECT AND CONSTRUCTION MANAGEMENT</h4>
              <div className="story__menu__subtitle">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat.
              </div>
            </div>

            <div className="story__menu__list">
              <img src="/STRUCTURE.png" alt="project" className="story__menu__icon" />
              <h4 className="story__menu__title">STRUCTURE AUDIT AND MAINTENANCE</h4>
              <div className="story__menu__subtitle">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat.
              </div>
            </div>

            <div className="story__menu__list">
              <img src="/factory.png" alt="project" className="story__menu__icon" />
              <h4 className="story__menu__title">FACTORY CONSTRUCTION AND MODELING</h4>
              <div className="story__menu__subtitle">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat.
              </div>
            </div>
          </div>
        </div>
        <section className="amazing">
          <div className="content__conteiner">
            <h4 className="amazing__title">Want to build something amazing?</h4>
            <div className="amazing__button">
              <a href="#" className="amazing__button__link">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </section>

        <section className="news">
          <div className="content__conteiner">
            <form action="#" method="POST" className="news__form">
              <div className="news__title">Newsletter Signup</div>
              <div className="news__but">
                <input className="news__input" placeholder="test@youremail.com" type="email" />
                <a href="#" className="news__button">
                  SIGNUP
                </a>
              </div>
            </form>
          </div>
        </section>
      </section>
    );
  }
}
