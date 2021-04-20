import React from 'react';
import './PageNotFound.scss';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div className="not-found">
      <div className="not-found__style">
        Page Not Found , Please Visit =
        <Link to="/dashboard" className="not-found__link">
          {' '}
          Homepage
        </Link>
      </div>
    </div>
  );
}
