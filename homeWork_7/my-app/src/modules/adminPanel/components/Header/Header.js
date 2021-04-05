import React, { useContext } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { themeContext } from '../../../../context/themeContext';
import ThemeToggler from '../ThemeToggler/ThemeToggler';

export default function Header() {
  const { theme } = useContext(themeContext);

  return (
    <header className="header">
      <div className="header__wrapper">
        <Link
          to="/"
          className={
            theme === 'pannel__content_dark' ? 'header__logo' : 'header__logo header__logo_dark'
          }
        >
          Admin<span className="header__logo_panel">Panel</span>
        </Link>
        <nav className="header__nav">
          <Link
            to="/"
            className={
              theme === 'pannel__content_dark'
                ? 'header__nav__link dashboard__link'
                : 'header__nav__link_white dashboard__link'
            }
          >
            Dashboard
          </Link>
          <Link
            to="/users"
            className={
              theme === 'pannel__content_dark'
                ? 'header__nav__link dashboard__link'
                : 'header__nav__link_white dashboard__link'
            }
          >
            Users
          </Link>
          <Link
            to="/albums"
            className={
              theme === 'pannel__content_dark'
                ? 'header__nav__link dashboard__link'
                : 'header__nav__link_white dashboard__link'
            }
          >
            Albums
          </Link>
        </nav>
        <ThemeToggler />
      </div>
    </header>
  );
}
